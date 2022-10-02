import Auth from 'helpers/auth';

module.exports = {
    path: "company",
    getComponents(nextState, callback) {
        require.ensure([], function (require) {
            callback(null, require('hr/pages/home'))
        })
    },
    // getIndexRoute(partialNextState, callback) {
    //     require.ensure([], function (require) {

    //         callback(null, {
    //             component: require('hr/pages/company/dashboard')
    //         })

    //         Auth.checkUserAuthorized([], callback, require('hr/pages/company'));
    //     })
    // },
    getChildRoutes(partialNextState, callback) {
        callback(null, [{
            path: "add",
            getComponents(nextState, callback) {
                require.ensure([], function (require) {
                    Auth.checkUserAuthorized(["ERP_HR_SE_NW_CMPNY", "ERP_HR_SE_RED_CMPNY"], callback, require('hr/pages/company'));
                });
            }
        }, {
            path: "branch",
            getComponents(nextState, callback) {
                require.ensure([], function (require) {
                    Auth.checkUserAuthorized(["ERP_HR_SE_NW_BRNCH", "ERP_HR_SE_RED_BRNCH"], callback, require('hr/pages/company/branch'));
                })
            }
        }, {
            path: "department",
            getComponents(nextState, callback) {
                require.ensure([], function (require) {
                    callback(null, require('hr/pages/company/department'))
                })
            }
        }])
    }
} 