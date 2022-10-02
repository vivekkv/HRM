import Promise from 'bluebird';
import { request } from 'helpers/request';
import { List } from 'immutable';

export function getRoles(isDropdownComponent) {

    return () => {
        
        return new Promise((resolve, reject) => {

            request("hr/settings/userManagement/readRoles", {
                method: "GET"
            }).then((response) => {

                let roleList = [];

                if (response.completed && response.data.success) {

                    if (isDropdownComponent) {

                        response.data.payload.forEach((i) => {

                            roleList.push({ 'label': i.Role, 'value': i.Id })
                        });
                    } else {

                        roleList = response.data.payload;
                    }
                }

                resolve({ "RoleList": List(roleList) });
            });
        });
    }
}