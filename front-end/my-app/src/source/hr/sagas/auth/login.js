import { take, call, put, select } from 'redux-saga/effects';
import { List } from 'immutable';
import { bindInputChange } from 'utils/sagaInputChange';
import { dispatch } from 'helpers/reduxStore';
import { request } from 'helpers/request';
import { showWarningMessage } from 'utils/notification';
import { logMessage } from 'utils';
import { hashHistory } from 'react-router';
import Auth from 'helpers/auth';
import { INPUT_CHANGED, SUBMIT_LOGIN } from 'hrConstants/auth';
import { setForm, inputChanged } from '../../actions/auth';

const getStateData = (state) => state.hr.auth.login.get("data").toObject();

export function* authInputChanged() {

    while (true) {

        const { name, value } = yield take(INPUT_CHANGED);

        try {
            let formData = yield select(getStateData);
            let state = yield call(bindInputChange, null, name, value, false);
            yield put(setForm(state));
        }
        catch (e) {

            logMessage(e)
        }
    }
}

export function* submitLogin() {

    while (true) {

        yield take(SUBMIT_LOGIN);

        try {

            yield put(inputChanged("disableForm", true));

            let formData = yield select(getStateData);
            let response = yield call(request, "hr/auth/token", {
                method: 'POST',
                body: JSON.stringify({
                    'username': formData.UserName,
                    'password': formData.Password,
                    'companyId': formData.CompanyId
                }),
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8'
                }
            });

            if (response.completed && response.data.success) {

                if (response.data.payload.companySelectionRequired) {

                    yield put(inputChanged({ 'disableForm': false, 'companyList': List(parseCompanyList(response.data.payload.companies)) }));
                    
                } else if(response.data.payload.token) {

                    Auth.setToken(response.data.payload.token);
                    hashHistory.push('/hr/home');
                }
            } else if (response.completed) {

                yield put(inputChanged({ 'disableForm': false, 'errorMessage': response.data.error }));
            }
        }
        catch (e) {

            logMessage(e)
        }
    }
}

function parseCompanyList(companies) {

    companies.forEach((company) => {

        company.label = company.Name;
        company.value = company.Id;
    });

    return companies;
}