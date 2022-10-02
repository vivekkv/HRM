module.exports = {
    path: "employee",
    getComponents(nextState, callback) {
        require.ensure([], function (require) {
            callback(null, require('hr/pages/home'))
        })
    },
    getIndexRoute(partialNextState, callback) {
        require.ensure([], function (require) {
            callback(null, {
                component: require('hr/pages/employee/root')
            })
        })
    },
    getChildRoutes(partialNextState, callback) {
        callback(null, [{
            path: "add",
            getComponents(nextState, callback) {
                require.ensure([], function (require) {
                    callback(null, require('hr/pages/employee/root'))
                })
            }
        }, {
            path: "contracts",
            getComponents(nextState, callback) {
                require.ensure([], function (require) {
                    callback(null, require('hr/pages/employee/contracts'))
                })
            }
        }, {
            path: "assignments",
            getComponents(nextState, callback) {
                require.ensure([], function (require) {
                    callback(null, require('hr/pages/employee/assignments'))
                })
            }
        }, {
            path: "resignation",
            getComponents(nextState, callback) {
                require.ensure([], function (require) {
                    callback(null, require('hr/pages/employee/resignations'))
                })
            }
        }, {
            path: "achievement",
            getComponents(nextState, callback) {
                require.ensure([], function (require) {
                    callback(null, require('hr/pages/employee/achievements'))
                })
            }
        }, {
            path: "promotion",
            getComponents(nextState, callback) {
                require.ensure([], function (require) {
                    callback(null, require('hr/pages/employee/promotions'))
                })
            }
        }, {
            path: "complaints",
            getComponents(nextState, callback) {
                require.ensure([], function (require) {
                    callback(null, require('hr/pages/employee/complaints'))
                })
            }
        }, {
            path: "warning",
            getComponents(nextState, callback) {
                require.ensure([], function (require) {
                    callback(null, require('hr/pages/employee/warnings'))
                })
            }
        }, {
            path: "termination",
            getComponents(nextState, callback) {
                require.ensure([], function (require) {
                    callback(null, require('hr/pages/employee/termination'))
                })
            }
        }, {
            path: "employeeExit",
            getComponents(nextState, callback) {
                require.ensure([], function (require) {
                    callback(null, require('hr/pages/employee/employeeExit'))
                })
            }
        }])
    }
} 