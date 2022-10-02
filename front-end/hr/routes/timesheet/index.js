module.exports = {
    path: "timesheet",
    getComponents(nextState, callback) {
        require.ensure([], function (require) {
            callback(null, require('hr/pages/home'))
        })
    },
    getIndexRoute(partialNextState, callback) {
        require.ensure([], function (require) {
            callback(null, {
                component: require('hr/pages/timesheet/attendence')
            })
        })
    },
    getChildRoutes(partialNextState, callback) {
        callback(null, [{
            path: "attendence",
            getComponents(nextState, callback) {
                require.ensure([], function (require) {
                    callback(null, require('hr/pages/timesheet/attendence'))
                })
            }
        }, {
            path: "employeeHours",
            getComponents(nextState, callback) {
                require.ensure([], function (require) {
                    callback(null, require('hr/pages/timesheet/employeeHours'))
                })
            }
        }, {
            path: "leaves",
            getComponents(nextState, callback) {
                require.ensure([], function (require) {
                    callback(null, require('hr/pages/timesheet/leaves'))
                })
            }
        }, {
            path: "worksheet",
            getComponents(nextState, callback) {
                require.ensure([], function (require) {
                    callback(null, require('hr/pages/timesheet/worksheet'))
                })
            }
        }, {
            path: "holidays",
            getComponents(nextState, callback) {
                require.ensure([], function (require) {
                    callback(null, require('hr/pages/timesheet/holidays'))
                })
            }
        }])
    }

}