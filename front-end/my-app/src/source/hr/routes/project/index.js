module.exports = {
    path: "project",
    getComponents(nextState, callback) {
        require.ensure([], function (require) {
            callback(null, require('hr/pages/home'))
        })
    },
    getIndexRoute(partialNextState, callback) {
        require.ensure([], function (require) {
            callback(null, {
                 component: require('hr/pages/project/root')
            })
        })
    }
} 