module.exports = {
    path: "auth",
    getComponents(nextState, callback) {
        require.ensure([], function (require) {
            callback(null, require('../../../components/app'))
        })
    },
    getIndexRoute(partialNextState, callback) {
        require.ensure([], function (require) {
            callback(null, {
                component: require('hr/pages/auth/login')
            })
        })
    },
    getChildRoutes(partialNextState, callback) {
        callback(null, [{
            path: "login",
            getComponents(nextState, callback) {
                require.ensure([], function (require) {
                    callback(null, require('hr/pages/auth/login'))
                })
            }
        }])  
    }
} 