import { GET_ALL_ACCESS_CONTROL_LIST, INPUT_CHANGED, SET_FORM, ACCESS_CONTROL_CHANGED, UPDATE_ACCESS_CONTROL, TREE_NODE_SELECTED  } from 'hrConstants/settings/userManagement/accessControl';

export function getallAccessControlList() {
    return {
        type: GET_ALL_ACCESS_CONTROL_LIST
    }
}

export function inputChanged(name, value) {
    return {
        type: INPUT_CHANGED,
        name,
        value
    }
}

export function setForm(data) {
    return {
        type: SET_FORM,
        data
    }
}

export function accessControlChanged(resourceOperationId, checked) {
    return {
        type: ACCESS_CONTROL_CHANGED,
        resourceOperationId: Number(resourceOperationId),
        checked
    }
}

export function treeNodeSelected(id) {
    return {
        type: TREE_NODE_SELECTED,
        id
    }
}

export function updateAccessControl() {
    return {
        type: UPDATE_ACCESS_CONTROL
    }
}