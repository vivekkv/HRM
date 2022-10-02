module.exports = {
    path: "user",
    getComponents(nextState, callback) {
        require.ensure([], function (require) {
            callback(null, require('hr/pages/home'))
        })
    },
    getIndexRoute(partialNextState, callback) {
        require.ensure([], function (require) {
            callback(null, {
                component: require('hr/pages/user/profile')
            })
        })
    },
    getChildRoutes(partialNextState, callback) {
        callback(null, [{
            path: "profile",
            getComponents(nextState, callback) {
                require.ensure([], function (require) {
                    callback(null, require('hr/pages/user/profile'))
                })
            }
        }])
    }

}