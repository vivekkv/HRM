import { take, call, put, select } from 'redux-saga/effects';
import { List, fromJS } from 'immutable';
import { bindInputChange, copyObjectToArray, addItemToFormList } from 'utils/sagaInputChange';
import {  logMessage } from 'utils';
import { createConstant } from 'hrConstants/constantCreator';
import actionCreator from '../../actions/actionCreator';
import { request } from 'helpers/request';
import { dispatch } from 'helpers/reduxStore';
import { showServerResponseMessage } from 'utils/notification';
import { getCountries, getCompanyTypes, getStates } from '../../services/masterEntries';
import { getCompanies } from '../../services/company';
import Auth from 'helpers/auth';
import _ from 'lodash';

const getStateData = (state) => state.hr.company.root.get("data").toObject()

export function* companyInputChanged() {

    while (true) {

        const { name, value } = yield take(createConstant("COMPANY", "INPUT_CHANGED"));

        try {

            let formData = yield select(getStateData);
            let callbacks = getCallbacks(formData, name, value);

            bindInputChange(callbacks, name, value, false).then((state) => {

                dispatch(actionCreator("COMPANY", "SET_FORM", { 'data': state }));
            });
        }
        catch (e) {

            logMessage(e)
        }
    }
}

export function* createOrUpdateCompany() {

    while (true) {

        yield take(createConstant("COMPANY", "SUBMIT_ITEM"));

        try {

            let formData = yield select(getStateData);
            let data = parseData(formData);
            let response = yield call(request, "hr/company/" + (data.Id > 0 ? "update" : "create"), {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8'
                }
            });

            showServerResponseMessage(response);
            if (response.completed && response.data.success && response.data.payload.Id) {

                let companyList = formData.companyList.toArray();
                let isNewItem = data.Id > 0 ? false : true;
                data.Id = response.data.payload.Id;

                companyList = addItemToFormList(data, companyList, isNewItem);
                yield put(actionCreator("COMPANY", "INPUT_CHANGED", { name: "companyList", 'value': List(companyList) }));
                yield put(actionCreator("COMPANY", "CLEAR_STATE"));
            }
        }
        catch (e) {

            logMessage(e)
        }
    }
}

export function* editCompany() {

    while (true) {

        const { id } = yield take(createConstant("COMPANY", "EDIT_ITEM"));

        try {

            let formData = yield select(getStateData);
            let data = _.find(formData.companyList.toArray(), (i) => { return i.Id == Number(id) });

            if (data) {
                
                data.ShowAddForm = true;
                yield put(actionCreator("COMPANY", "SET_FORM", { 'data': data }));
                yield put(actionCreator("COMPANY", "INPUT_CHANGED", { 'name': 'CountryId', 'value': data.CountryId }));
            }
        }
        catch (e) {

            logMessage(e);
        }
    }
}

export function* deleteCompany() {

    while (true) {

        const { id } = yield take(createConstant("COMPANY", "REMOVE_ITEM"));

        try {

            let formData = yield select(getStateData);
            let data = { 'Id': Number(id), 'Status': false };

            let response = yield call(request, "hr/company/delete", {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8'
                }
            });

            if (response.completed && response.data.success) {

                showServerResponseMessage(response);
                let companyList = formData.companyList.toArray();
                _.remove(companyList, (i) => { return i.Id == data.Id });

                yield put(actionCreator("COMPANY", "INPUT_CHANGED", { name: "companyList", 'value': List(companyList) }));
                yield put(actionCreator("COMPANY", "CLEAR_STATE"));
            }
        }
        catch (e) {

            logMessage(e);
        }
    }
}

function parseData(formData) {

    return {

        'Name': formData.Name,
        'TradeName': formData.TradeName,
        'RegistrationNo': formData.RegistrationNo,
        'CompanyTypeId': formData.CompanyTypeId,
        'Email': formData.Email,
        'ContactPerson': formData.ContactPerson,
        'ContactNumber': formData.ContactNumber,
        'Website': formData.Website,
        'TaxNumber': formData.TaxNumber,
        'CountryId': formData.CountryId,
        'StateId': formData.StateId,
        'City': formData.City,
        'Zip': formData.Zip,
        'Address': formData.Address,
        'Id': formData.Id,
        'Status': true
    }
}

function getCallbacks(formData, name, value) {

    switch (name) {
        case "init":

            return [getCountries(true), getCompanyTypes(true), () => {

                return new Promise((resolve, reject) => {

                    let enableCreate = false, enableRead = false, enableDelete = false, enableUpdate = false;
                    let createChk = false, readChk = false, deleteChk = false, updChk = false;

                    Auth.getAuthorizedInfo(["ERP_HR_SE_NW_CMPNY", "ERP_HR_SE_UPD_CMPNY", "ERP_HR_SE_DEL_CMPNY", "ERP_HR_SE_RED_CMPNY"])
                        .then((authorizeInfo) => {

                            let enableRead = Auth.checkAuthorizedFromArray(authorizeInfo, "ERP_HR_SE_RED_CMPNY");
                            let enableCreate = Auth.checkAuthorizedFromArray(authorizeInfo, "ERP_HR_SE_NW_CMPNY");
                            let enableDelete = Auth.checkAuthorizedFromArray(authorizeInfo, "ERP_HR_SE_DEL_CMPNY");
                            let enableUpdate = Auth.checkAuthorizedFromArray(authorizeInfo, "ERP_HR_SE_UPD_CMPNY");
                            let showAddForm = false;

                            if(!enableRead && enableCreate) {
                                showAddForm = true;
                            }

                            let companyService = getCompanies(false);

                            if (enableRead) {

                                companyService().then((data) => {

                                    if(enableCreate && data.companyList.toArray().length == 0) {
                                        showAddForm = true;
                                    }

                                    resolve({ enableRead, enableDelete, enableCreate, enableUpdate, 'companyList': data.companyList, 'ShowAddForm': showAddForm });
                                });

                            } else {

                                resolve({ enableRead, enableDelete, enableCreate, enableUpdate, 'ShowAddForm': showAddForm });
                            }
                        });

                });
            }]
        case 'CountryId':
            return [getStates(value, true)]
        default:
            return [];
    }
}