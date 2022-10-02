import Auth from 'helpers/auth';

module.exports = {
    path: "settings",
    getComponents(nextState, callback) {
        require.ensure([], function (require) {
            callback(null, require('hr/pages/home'))
        })
    },
    getIndexRoute(partialNextState, callback) {
        require.ensure([], function (require) {
            callback(null, {
                component: require('hr/pages/settings/dashboard')
            })
        })
    },
    getChildRoutes(partialNextState, callback) {
        callback(null, [{
            path: "userManagement", 
            getComponents(nextState, callback) {
                require.ensure([], function (require) {
                    Auth.checkUserAuthorized(["ERP_HR_SE_NW_USR", 
                    "ERP_HR_SE_UPD_USR", "ERP_HR_SE_RED_USR", 
                    "ERP_HR_SE_DEL_USR", "ERP_HR_SE_NW_RLE", "ERP_HR_SE_RED_RLE", "ERP_HR_SE_UPD_ACC_CTRL"
                     ], callback, require('hr/pages/settings/userManagement'));
                })
            }
        }, {
            path: "systemSettings",
            getComponents(nextState, callback) {
                require.ensure([], function (require) {
                    callback(null, require('hr/pages/settings/systemSettings'))
                })
            }
        }])
    }
} 