import Auth from 'helpers/auth';

module.exports = {
    path: "home",
    getComponents(nextState, callback) {
        require.ensure([], function (require) {
            callback(null, require('hr/pages/home'))
        })
    },
    getIndexRoute(partialNextState, callback) {
        require.ensure([], function (require) {
            Auth.checkUserAuthorized("ERP_HR_CMON_SHW_HME_DASHBOARD", callback, require('hr/pages/dashboard'));
        })
    },
    getChildRoutes(partialNextState, callback) {
        callback(null, [])
    }
} 