module.exports = {
    path: "payroll",
    getComponents(nextState, callback) {
        require.ensure([], function (require) {
             callback(null, require('hr/pages/home'))
        })
    },
    getIndexRoute(partialNextState, callback) {
        require.ensure([], function (require) {
            callback(null, {
                component: require('hr/pages/payroll/SalaryComponent')
            })
        })
    },
    getChildRoutes(partialNextState, callback) {
        callback(null, [{
            path: "salaryComponent",
            getComponents(nextState, callback) {
                require.ensure([], function (require) {
                    callback(null, require('hr/pages/payroll/SalaryComponent'));
                })
            }
        }, {
            path: "salaryGroup",
            getComponents(nextState, callback) {
                require.ensure([], function (require) {
                    callback(null, require('hr/pages/payroll/SalaryGroup'));
                })
            }
        }, {
            path: "payslipFormula",
            getComponents(nextState, callback) {
                require.ensure([], function (require) {
                    callback(null, require('hr/pages/payroll/PayslipFormula'));
                })
            }
        }, {
            path: "assignSalaryGroup",
            getComponents(nextState, callback) {
                require.ensure([], function (require) {
                    callback(null, require('hr/pages/payroll/AssignSalaryGroup'));
                })
            }
        }, {
            path: "shift",
            getComponents(nextState, callback) {
                require.ensure([], function (require) {
                    callback(null, require('hr/pages/payroll/Shift'));
                })
            }
        }, {
            path: "staffShift",
            getComponents(nextState, callback) {
                require.ensure([], function (require) {
                    callback(null, require('hr/pages/payroll/StaffShift'));
                })
            }
        }, {
            path: "payperiod",
            getComponents(nextState, callback) {
                require.ensure([], function (require) {
                    callback(null, require('hr/pages/payroll/Payperiod'));
                })
            }
        }, {
            path: "payperiodClose",
            getComponents(nextState, callback) { 
                require.ensure([], function (require) {
                    callback(null, require('hr/pages/payroll/PayperiodClose'));
                })
            }
        }, {
            path: "salaryProcess",
            getComponents(nextState, callback) {
                require.ensure([], function (require) {
                    callback(null, require('hr/pages/payroll/salaryProcess'));
                })
            }
        }])
    }
}