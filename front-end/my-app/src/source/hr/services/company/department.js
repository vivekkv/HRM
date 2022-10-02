import Promise from 'bluebird';
import { request } from 'helpers/request';
import { List } from 'immutable';

export function getDepartments(isDropdownComponent, isAuthorized) {

    return () => {

        return new Promise((resolve, reject) => {

            if (isAuthorized == false) {

                resolve({ "DepartmentList": List([]) });
                
            } else {

                request("hr/company/department/read", {
                    method: "GET",
                    headers: {
                        'resourcecode': "ERP_HR_SE_RED_DEPARTMNT"
                    }
                }).then((response) => {

                    let list = [];

                    if (response.completed && response.data.success) {

                        if (isDropdownComponent) {

                            response.data.payload.forEach((i) => {

                                list.push({ 'label': i.DepartmentName, 'value': i.Id })
                            });

                        } else {

                            list = response.data.payload;
                        }
                    }

                    resolve({ "DepartmentList": List(list) });
                });
            }
        });
    }
}