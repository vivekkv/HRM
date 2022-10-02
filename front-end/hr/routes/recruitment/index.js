module.exports = {
    path: "recruitement",
    getComponents(nextState, callback) {
        require.ensure([], function (require) {
            callback(null, require('hr/pages/home'))
        })
    },
    getIndexRoute(partialNextState, callback) {
        require.ensure([], function (require) {
            callback(null, {
                component: require('hr/pages/recruitment/dashboard')
            })
        })
    },
    getChildRoutes(partialNextState, callback) {
        callback(null, [{
            path: "settings/jobType",
            getComponents(nextState, callback) {
                require.ensure([], function (require) {
                    callback(null, require('hr/pages/recruitment/settings/jobType'))
                })
            }
        }, {
            path: "jobpost",
            getComponents(nextState, callback) {
                require.ensure([], function (require) {
                    callback(null, require('hr/pages/recruitment/jobPost'))
                })
            }
        }])
    }
} 