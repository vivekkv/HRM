module.exports = {
    path: "organization",
    getComponents(nextState, callback) {
        require.ensure([], function (require) {
            callback(null, require('hr/pages/home'))
        })
    },
    getIndexRoute(partialNextState, callback) {
        require.ensure([], function (require) {
            callback(null, {
                component: require('hr/pages/organization')
            })
        })
    },
    getChildRoutes(partialNextState, callback) {
        callback(null, [])
    }
} 