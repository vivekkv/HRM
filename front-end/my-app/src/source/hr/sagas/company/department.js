import { take, call, put, select } from 'redux-saga/effects';
import { List, fromJS } from 'immutable';
import { bindInputChange, copyObjectToArray, addItemToFormList } from 'utils/sagaInputChange';
import { logMessage } from 'utils';
import { createConstant } from 'hrConstants/constantCreator';
import actionCreator from '../../actions/actionCreator';
import { request } from 'helpers/request';
import { dispatch } from 'helpers/reduxStore';
import { showServerResponseMessage } from 'utils/notification';
import { getBranches, getBranchName } from '../../services/company/branch';
import { getDepartments } from '../../services/company/department';
import Auth from 'helpers/auth';
import _ from 'lodash';

const getStateData = (state) => state.hr.company.department.get("data").toObject()

export function* departmentInputChanged() {

    while (true) {

        const { name, value } = yield take(createConstant("DEPARTMENT", "INPUT_CHANGED"));

        try {

            let formData = yield select(getStateData);
            let callbacks = getCallbacks(formData, name, value);

            bindInputChange(callbacks, name, value, false).then((state) => {

                dispatch(actionCreator("DEPARTMENT", "SET_FORM", { 'data': state }));
            });
        }
        catch (e) {

            logMessage(e)
        }
    }
}

export function* createOrUpdateDepartment() {

    while (true) {

        yield take(createConstant("DEPARTMENT", "SUBMIT_ITEM"));

        try {

            let formData = yield select(getStateData);
            let data = parseData(formData);
            let response = yield call(request, "hr/company/department/" + (data.Id > 0 ? "update" : "create"), {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    'resourcecode': (data.Id > 0 ? "ERP_HR_SE_UPD_DEPARTMNT" : "ERP_HR_SE_NW_DEPARTMNT")
                }
            });

            showServerResponseMessage(response);
            if (response.completed && response.data.success && response.data.payload.Id) {

                let departmentList = formData.DepartmentList.toArray();
                let isNewItem = data.Id > 0 ? false : true;
                data.Id = response.data.payload.Id;
                data.BranchName = getBranchName(formData.BranchId, formData.BranchList);
                data.BranchId = formData.BranchId;

                departmentList = addItemToFormList(data, departmentList, isNewItem);
                yield put(actionCreator("DEPARTMENT", "INPUT_CHANGED", { name: "DepartmentList", 'value': List(departmentList) }));
                yield put(actionCreator("DEPARTMENT", "CLEAR_STATE"));
            }
        }
        catch (e) {

            logMessage(e)
        }
    }
}

export function* editDepartment() {

    while (true) {

        const { id } = yield take(createConstant("DEPARTMENT", "EDIT_ITEM"));

        try {

            let formData = yield select(getStateData);
            let data = _.find(formData.DepartmentList.toArray(), (i) => { return i.Id == Number(id) });

            if (data) {
                
                data.ShowAddForm = true;
                yield put(actionCreator("DEPARTMENT", "SET_FORM", { 'data': data }));
            }
        }
        catch (e) {

            logMessage(e);
        }
    }
}

export function* deleteDepartment() {

    while (true) {

        const { id } = yield take(createConstant("DEPARTMENT", "REMOVE_ITEM"));

        try {

            let formData = yield select(getStateData);
            let data = { 'Id': Number(id), 'Status': false };

            let response = yield call(request, "hr/company/department/delete", {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    'resourcecode': "ERP_HR_SE_DEL_DEPARTMNT"
                }
            });

            if (response.completed && response.data.success) {

                showServerResponseMessage(response);
                let departmentList = formData.DepartmentList.toArray();
                _.remove(departmentList, (i) => { return i.Id == data.Id });

                yield put(actionCreator("DEPARTMENT", "INPUT_CHANGED", { name: "DepartmentList", 'value': List(departmentList) }));
                yield put(actionCreator("DEPARTMENT", "CLEAR_STATE"));
            }
        }
        catch (e) {

            logMessage(e);
        }
    }
}

function parseData(formData) {

    return {
        'DepartmentName': formData.DepartmentName,
        'BranchId': formData.BranchId,
        'ParentDepartmentId': null,
        'DepartmentHeadId': null,
        'Id': formData.Id,
        'Status': true
    }
}

function getCallbacks(formData, name, value) {

    switch (name) {

        case "init":

            return [getBranches(true), () => {

                return new Promise((resolve, reject) => {

                    let enableCreate = false, enableRead = false, enableDelete = false, enableUpdate = false;
                    let createChk = false, readChk = false, deleteChk = false, updChk = false;

                    Auth.getAuthorizedInfo(["ERP_HR_SE_NW_DEPARTMNT", "ERP_HR_SE_UPD_DEPARTMNT", "ERP_HR_SE_DEL_DEPARTMNT", "ERP_HR_SE_RED_DEPARTMNT"])
                        .then((authorizeInfo) => {

                            let enableRead = Auth.checkAuthorizedFromArray(authorizeInfo, "ERP_HR_SE_RED_DEPARTMNT");
                            let enableCreate = Auth.checkAuthorizedFromArray(authorizeInfo, "ERP_HR_SE_NW_DEPARTMNT");
                            let enableDelete = Auth.checkAuthorizedFromArray(authorizeInfo, "ERP_HR_SE_DEL_DEPARTMNT");
                            let enableUpdate = Auth.checkAuthorizedFromArray(authorizeInfo, "ERP_HR_SE_UPD_DEPARTMNT");
                            let showAddForm = false;

                            if(!enableRead && enableCreate) {
                                showAddForm = true;
                            }

                            let departmentService = getDepartments(false, enableRead);

                            
                            if (enableRead) {

                                departmentService().then((data) => {
debugger
                                    if(enableCreate && data.DepartmentList.toArray().length == 0) {

                                        showAddForm = true;
                                    }

                                    resolve({ enableRead, enableDelete, enableCreate, enableUpdate, 'DepartmentList': data.DepartmentList, 'ShowAddForm': showAddForm });
                                });

                            } else {

                                resolve({ enableRead, enableDelete, enableCreate, enableUpdate, 'ShowAddForm': showAddForm });
                            }
                        });

                });
            }]
        default:
            return [];
    }
}