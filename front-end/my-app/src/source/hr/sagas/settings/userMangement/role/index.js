import { take, call, put, select } from 'redux-saga/effects';
import { List, fromJS } from 'immutable';
import { bindInputChange, copyObjectToArray, addItemToFormList } from 'utils/sagaInputChange';
import { logMessage } from 'utils';
import { request } from 'helpers/request';
import { dispatch } from 'helpers/reduxStore';
import { showServerResponseMessage } from 'utils/notification';
import { getRoles } from '../../../../services/userManagement/roles';
import createConstant from 'hrConstants/constantCreator';
import actionCreator from '../../../../actions/actionCreator';
import _ from 'lodash';

const getStateData = (state) => state.hr.settings.userManagement.roles.get("data").toObject();
const getUserManagementRootData = (state) => state.hr.settings.userManagement.root.get("data").toObject();

export function* rolesInputChanged() {

    while (true) {

        const { name, value } = yield take(createConstant("ROLE", "INPUT_CHANGED"));

        try {

            let formData = yield select(getStateData);
            let userManagementRootData = yield select(getUserManagementRootData);
            let callbacks = getCallbacks(formData, name, value, userManagementRootData);

            bindInputChange(callbacks, name, value, false).then((state) => {

                dispatch(actionCreator("ROLE", "SET_FORM", { 'data': state }));
            });
        }
        catch (e) {

            logMessage(e)
        }
    }
}

export function* createRole() {

    while (true) {

        yield take(createConstant("ROLE", "SUBMIT_ITEM"));

        try {

            let formData = yield select(getStateData);
            let data = { 'Role': formData.Role, 'Id': formData.Id, 'Status': true };
            let response = yield call(request, "hr/settings/userManagement/" + (formData.Id > 0 ? "updateRole" : "createRole"), {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8'
                }
            });

            showServerResponseMessage(response);
            if (response.completed && response.data.success && response.data.payload.Id) {

                let roleList = formData.RoleList.toArray();
                let isNewItem = data.Id > 0 ? false : true;
                data.Id = response.data.payload.Id;

                roleList = addItemToFormList(data, roleList, isNewItem);
                  
                yield put(actionCreator("ROLE", "INPUT_CHANGED", { name: "RoleList", 'value': List(roleList) }));
                yield put(actionCreator("ROLE", "CLEAR_STATE"));
            }
        }
        catch (e) {

            logMessage(e);
        }
    }
}

export function* editRole() {

    while (true) {

        const { id } = yield take(createConstant("ROLE", "EDIT_ITEM"));

        try {

            let formData = yield select(getStateData);
            let data = _.find(formData.RoleList.toArray(), (i) => { return i.Id == Number(id) });

            if (data) {
                
                data.ShowRoleAddForm = true;
                yield put(actionCreator("ROLE", "SET_FORM", { 'data': data }));
            }
        }
        catch (e) {

            logMessage(e);
        }
    }
}

export function* deleteRole() {

    while (true) {

        const { id } = yield take(createConstant("ROLE", "REMOVE_ITEM"));

        try {

            let formData = yield select(getStateData);
            let data = { 'Id': Number(id), 'Status': false };
            let response = yield call(request, "hr/settings/userManagement/deleteRole", {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8'
                }
            });

            if (response.completed && response.data.success && response.data.payload.Id) {

                showServerResponseMessage(response);
                let roleList = formData.RoleList.toArray();
                _.remove(roleList, (i) => { return i.Id == data.Id });

                yield put(actionCreator("ROLE", "INPUT_CHANGED", { name: "RoleList", 'value': List(roleList) }));
                yield put(actionCreator("ROLE", "CLEAR_STATE"));
            }
        }
        catch (e) {

            logMessage(e);
        }
    }
}

function getCallbacks(formData, name, value, userManagementRootData) {

    switch (name) {
        case "init":
            return [() => {

                return new Promise((resolve, reject) => {

                    let showAddForm = false;

                    if (!userManagementRootData.enableRoleRead && userManagementRootData.enableRoleCreate) {

                        showAddForm = true;
                    }

                    let roleService = getRoles(false);

                    if (userManagementRootData.enableRoleRead) {

                        roleService().then((data) => {

                            if (userManagementRootData.enableRoleCreate && data.RoleList.toArray().length == 0) {

                                showAddForm = true;
                            }

                            resolve({ 'RoleList': data.RoleList, 'ShowRoleAddForm': showAddForm });
                        });

                    } else {

                        resolve({ 'ShowRoleAddForm': showAddForm });
                    }

                });
            }]
        default:
            return [];
    }
}