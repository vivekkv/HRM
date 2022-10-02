import Promise from 'bluebird';
import { request } from 'helpers/request';
import { List } from 'immutable';
import _ from 'lodash';

export function getBranches(isDropdownComponent, isAuthorized) {

    return () => {

        return new Promise((resolve, reject) => {

            if (isAuthorized == false) {

                resolve({ "BranchList": List([]) });
                
            } else {

                request("hr/company/branch/read", {
                    method: "GET",
                    headers: {
                        'resourcecode': "ERP_HR_SE_RED_BRNCH"
                    }
                }).then((response) => {

                    let list = [];

                    if (response.completed && response.data.success) {

                        if (isDropdownComponent) {

                            response.data.payload.forEach((i) => {

                                list.push({ 'label': i.BranchName, 'value': i.Id })
                            });

                        } else {

                            list = response.data.payload;
                        }
                    }

                    resolve({ "BranchList": List(list) });
                });
            }
        });
    }
}

export function getBranchName(branchId, branchList) {

    let branch = _.find(branchList.toArray(), (i) => { return i.value == branchId });
    return branch ? branch.label : "";
}