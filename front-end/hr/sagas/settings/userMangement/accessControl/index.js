import { take, call, put, select } from 'redux-saga/effects';
import { List, fromJS } from 'immutable';
import { GET_ALL_ACCESS_CONTROL_LIST, INPUT_CHANGED, ACCESS_CONTROL_CHANGED, UPDATE_ACCESS_CONTROL, TREE_NODE_SELECTED } from 'hrConstants/settings/userManagement/accessControl';
import { logMessage } from 'utils';
import { setForm, inputChanged, setAccessControlChangeList } from '../../../../actions/settings/userManagement/accessControl';
import { bindInputChange } from 'utils/sagaInputChange';
import { request } from 'helpers/request';
import { dispatch } from 'helpers/reduxStore';
import { showWarningMessage } from 'utils/notification';
import { getRoles } from '../../../../services/userManagement/roles';
import { getRoleAccessControlList } from '../../../../services/userManagement/accessControl';
import _ from 'lodash';

const getStateData = (state) => state.hr.settings.userManagement.accessControl.get("data").toObject();

export function* accessControlInputChanged() {

    while (true) {

        const { name, value } = yield take(INPUT_CHANGED);

        try {

            let formData = yield select(getStateData);
            let callbacks = getCallbacks(formData, name, value);

            bindInputChange(callbacks, name, value, false).then((state) => {
                dispatch(setForm(state));
            });
        }
        catch (e) {

            logMessage(e)
        }
    }
}

export function* treeNodeSelected() {

    while(true) {

        const  { id } = yield take(TREE_NODE_SELECTED);
        let formData = yield select(getStateData);
        let treeOpenNodes = formData.TreeViewOpenNodes.toArray();
        
        if(treeOpenNodes.indexOf(id) >= 0) {

            _.remove(treeOpenNodes, (i) => { return i == id });
        } else {

            treeOpenNodes.push(id);
        }

        yield put(inputChanged("TreeViewOpenNodes", List(treeOpenNodes)))
    }
}

export function* getAccessControlList() {

    while (true) {

        yield take(GET_ALL_ACCESS_CONTROL_LIST);

        try {

            let response = yield call(request, 'hr/settings/userManagement/getAccessControlList', {
                method: 'GET'
            });
            if (response.completed && response.data.success) {

                let resources = response.data.payload.Resources;
                let resourceOperations = response.data.payload.ResourceOperations;

                yield put(inputChanged('AccessControlList', fromJS({
                    'Resources': List(resources),
                    'ResourceOperations': List(resourceOperations)
                })));
            }
        }
        catch (e) {

            logMessage(e)
        }
    }
}

export function* accessControlChanged() {

    while (true) {

        const { resourceOperationId, checked } = yield take(ACCESS_CONTROL_CHANGED);
        let formData = yield select(getStateData);
        let changeList = formData.AccessControlChangeList.toArray();
        let exists = _.find(changeList, (i) => { return i.resourceOperationId == resourceOperationId });

        if (exists) {

            //_.remove(changeList, (i) => { return i.resourceOperationId == resourceOperationId });
            exists.checked = checked;

        } else {

            changeList.push({ 'resourceOperationId': resourceOperationId, checked })
        }

        let resourceOperationList = formData.RoleAccessControlList.toArray();
        let resourceOperationItem = _.find(resourceOperationList, (i) => { return i.ResourceOperationId == resourceOperationId })
        
        if(resourceOperationItem) {
            
            resourceOperationItem.checked = checked;
        } else {

            resourceOperationList.push({
                'ResourceOperationId': resourceOperationId,
                'checked': checked
            })
        }

        yield put(inputChanged({ 'RoleAccessControlList': List(resourceOperationList), 'AccessControlChangeList': List(changeList)  }))
    }
}

export function* updateAccessControl() {

    while (true) {

        yield take(UPDATE_ACCESS_CONTROL);  

        let formData = yield select(getStateData);
        let response = yield call(request, "hr/settings/userManagement/updateRoleAccessControls", {
            method: 'POST',
            body: JSON.stringify({
                'roleId': formData.AuthorizeRoleId,
                'accessControlChanges': formData.AccessControlChangeList.toArray()
            }),
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            }
        });

        if(response.completed && response.data.success) {

            showWarningMessage("Role permissions updated");
        }
    }
}

function getCallbacks(formData, name, value) {

    switch (name) {
        case "init":

            return [getRoles(true)]
        case 'AuthorizeRoleId':

            return [getRoleAccessControlList(value), () => {
                return new Promise((resolve) => {
                    resolve({ 'shouldComponentUpdate': true })
                })
            }]
        default:
            return [];
    }
}