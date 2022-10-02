import { take, call, put, select } from 'redux-saga/effects';
import { List, fromJS } from 'immutable';
import { bindInputChange, copyObjectToArray, addItemToFormList } from 'utils/sagaInputChange';
import { logMessage } from 'utils';
import { createConstant } from 'hrConstants/constantCreator';
import actionCreator from '../../actions/actionCreator';
import { request } from 'helpers/request';
import { dispatch } from 'helpers/reduxStore';
import { showServerResponseMessage } from 'utils/notification';
import { getCountries, getBranchTypes, getStates, getTimezones, getCurrencies } from '../../services/masterEntries';
import { getBranches } from '../../services/company/branch'
import Auth from 'helpers/auth';
import _ from 'lodash';

const getStateData = (state) => state.hr.company.branch.get("data").toObject()

export function* branchInputChanged() {

    while (true) {

        const { name, value } = yield take(createConstant("BRANCH", "INPUT_CHANGED"));

        try {

            let formData = yield select(getStateData);
            let callbacks = getCallbacks(formData, name, value);

            bindInputChange(callbacks, name, value, false).then((state) => {

                dispatch(actionCreator("BRANCH", "SET_FORM", { 'data': state }));
            });
        }
        catch (e) {

            logMessage(e)
        }
    }
}

export function* createOrUpdateBranch() {

    while (true) {

        yield take(createConstant("BRANCH", "SUBMIT_ITEM"));

        try {

            let formData = yield select(getStateData);
            let data = parseData(formData);
            let response = yield call(request, "hr/company/branch/" + (data.Id > 0 ? "update" : "create"), {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    'resourcecode': (data.Id > 0 ? "ERP_HR_SE_UPD_BRNCH" : "ERP_HR_SE_NW_BRNCH")
                }
            });

            showServerResponseMessage(response);
            if (response.completed && response.data.success && response.data.payload.Id) {

                let branchList = formData.BranchList.toArray();
                let isNewItem = data.Id > 0 ? false : true;
                data.Id = response.data.payload.Id;

                branchList = addItemToFormList(data, branchList, isNewItem);
                yield put(actionCreator("BRANCH", "INPUT_CHANGED", { name: "BranchList", 'value': List(branchList) }));
                yield put(actionCreator("BRANCH", "CLEAR_STATE"));
            }
        }
        catch (e) {

            logMessage(e)
        }
    }
}

export function* editBranch() {

    while (true) {

        const { id } = yield take(createConstant("BRANCH", "EDIT_ITEM"));

        try {

            let formData = yield select(getStateData);
            let data = _.find(formData.BranchList.toArray(), (i) => { return i.Id == Number(id) });

            if (data) {
                
                data.ShowAddForm = true;
                yield put(actionCreator("BRANCH", "SET_FORM", { 'data': data }));
                yield put(actionCreator("BRANCH", "INPUT_CHANGED", { 'name': 'CountryId', 'value': data.CountryId }));
            }
        }
        catch (e) {

            logMessage(e);
        }
    }
}

export function* deleteBranch() {

    while (true) {

        const { id } = yield take(createConstant("BRANCH", "REMOVE_ITEM"));

        try {

            let formData = yield select(getStateData);
            let data = { 'Id': Number(id), 'Status': false };

            let response = yield call(request, "hr/company/branch/delete", {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    'resourcecode': "ERP_HR_SE_DEL_BRNCH"
                }
            });

            if (response.completed && response.data.success) {

                showServerResponseMessage(response);
                let branchList = formData.BranchList.toArray();
                _.remove(branchList, (i) => { return i.Id == data.Id });

                yield put(actionCreator("BRANCH", "INPUT_CHANGED", { name: "BranchList", 'value': List(branchList) }));
                yield put(actionCreator("BRANCH", "CLEAR_STATE"));
            }
        }
        catch (e) {

            logMessage(e);
        }
    }
}

function parseData(formData) {

    return {

        'BranchName': formData.BranchName,
        'BranchTypeId': formData.BranchTypeId,
        'TimezoneId': formData.TimezoneId,
        'CurrencyId': formData.CurrencyId,
        'Email': formData.Email,
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

            return [getCountries(true), getBranchTypes(true), getTimezones(true), getCurrencies(true), () => {

                return new Promise((resolve, reject) => {

                    let enableCreate = false, enableRead = false, enableDelete = false, enableUpdate = false;
                    let createChk = false, readChk = false, deleteChk = false, updChk = false;

                    Auth.getAuthorizedInfo(["ERP_HR_SE_NW_BRNCH", "ERP_HR_SE_UPD_BRNCH", "ERP_HR_SE_DEL_BRNCH", "ERP_HR_SE_RED_BRNCH"])
                        .then((authorizeInfo) => {

                            let enableRead = Auth.checkAuthorizedFromArray(authorizeInfo, "ERP_HR_SE_RED_BRNCH");
                            let enableCreate = Auth.checkAuthorizedFromArray(authorizeInfo, "ERP_HR_SE_NW_BRNCH");
                            let enableDelete = Auth.checkAuthorizedFromArray(authorizeInfo, "ERP_HR_SE_DEL_BRNCH");
                            let enableUpdate = Auth.checkAuthorizedFromArray(authorizeInfo, "ERP_HR_SE_UPD_BRNCH");
                            let showAddForm = false;

                            if(!enableRead && enableCreate) {
                                showAddForm = true;
                            }

                            let branchService = getBranches(false);

                            if (enableRead) {

                                branchService().then((data) => {

                                    if(enableCreate && data.BranchList.toArray().length == 0) {

                                        showAddForm = true;
                                    }

                                    resolve({ enableRead, enableDelete, enableCreate, enableUpdate, 'BranchList': data.BranchList, 'ShowAddForm': showAddForm });
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