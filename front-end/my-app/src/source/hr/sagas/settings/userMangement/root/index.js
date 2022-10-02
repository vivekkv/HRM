import { take, call, put, select } from 'redux-saga/effects';
import { List, fromJS } from 'immutable';
import { INPUT_CHANGED } from 'hrConstants/settings/userManagement/root';
import { setForm, inputChanged } from '../../../../actions/settings/userManagement/root';
import { bindInputChange } from 'utils/sagaInputChange';
import { request } from 'helpers/request';
import { dispatch } from 'helpers/reduxStore';
import { logMessage } from 'utils';
import { showWarningMessage } from 'utils/notification';
import Auth from 'helpers/auth';

const getStateData = (state) => state.hr.settings.userManagement.root.get("data").toObject();

export function* userMangementRootInputChanged() {

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

function getCallbacks(formData, name, value) {

    switch (name) {
        case "init":
            return [() => {

                return new Promise((resolve, reject) => {

                     Auth.getAuthorizedInfo(["ERP_HR_SE_NW_USR", "ERP_HR_SE_NW_RLE", "ERP_HR_SE_UPD_RLE", "ERP_HR_SE_RED_RLE", "ERP_HR_SE_DEL_RLE", "ERP_HR_SE_UPD_ACC_CTRL"])
                        .then((authorizeInfo) => {

                            let userEntryAuthorized = Auth.checkAuthorizedFromArray(authorizeInfo, "ERP_HR_SE_NW_USR");
                            let enableRoleCreate = Auth.checkAuthorizedFromArray(authorizeInfo, "ERP_HR_SE_NW_RLE");
                            let enableRoleUpdate = Auth.checkAuthorizedFromArray(authorizeInfo, "ERP_HR_SE_UPD_RLE");
                            let enableRoleDelete = Auth.checkAuthorizedFromArray(authorizeInfo, "ERP_HR_SE_DEL_RLE");
                            let enableRoleRead   = Auth.checkAuthorizedFromArray(authorizeInfo, "ERP_HR_SE_RED_RLE");
                            let accessControlAuthorized = Auth.checkAuthorizedFromArray(authorizeInfo, "ERP_HR_SE_UPD_ACC_CTRL");
                            let defaultTab = getDefaultTab(userEntryAuthorized, enableRoleCreate, enableRoleRead, accessControlAuthorized);

                            resolve({ 'defaultTab': defaultTab, userEntryAuthorized, enableRoleCreate, enableRoleRead, enableRoleUpdate, enableRoleDelete, accessControlAuthorized });
                        });
                });
            }]
        default:
            return [];
    }
}

function getDefaultTab(userEntryAuthorized, enableRoleCreate, accessControlAuthorized) {

    if(userEntryAuthorized) 
    {
        return 1;
    } else if(enableRoleCreate || enableRoleRead) {
        
        return 2;
    } else if(accessControlAuthorized) {
        
        return 3;
    }
    return 0;
}