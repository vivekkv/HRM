import Promise from 'bluebird';
import { request } from 'helpers/request';
import { List } from 'immutable';

export function getCompanies(isDropdownComponent, isAuthorized) {

    return () => {

        return new Promise((resolve, reject) => {

            if (isAuthorized == false) {

                resolve({ "companyList": List([]) });
                
            } else {

                request("hr/company/read", {
                    method: "GET",
                    headers: {
                        'resourcecode': "ERP_HR_SE_RED_CMPNY"
                    }
                }).then((response) => {

                    let list = [];

                    if (response.completed && response.data.success) {

                        if (isDropdownComponent) {

                            response.data.payload.forEach((i) => {

                                list.push({ 'label': i.Name, 'value': i.Id })
                            });

                        } else {

                            list = response.data.payload;
                        }
                    }

                    resolve({ "companyList": List(list) });
                });
            }


        });
    }
}