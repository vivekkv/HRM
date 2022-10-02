import Promise from 'bluebird';
import { request } from 'helpers/request';
import { List } from 'immutable';

export function getRoleAccessControlList(roleId) {

    return () => {
        
        return new Promise((resolve, reject) => {

            request("hr/settings/userManagement/getRoleAccessControls?roleId=" + roleId, {
                method: "GET"
            }).then((response) => {

                let accessControlList = [];
                if (response.completed && response.data.success) {

                    accessControlList =  response.data.payload;
                }

                resolve({ "RoleAccessControlList": List(accessControlList) });
            });
        });
    }
}