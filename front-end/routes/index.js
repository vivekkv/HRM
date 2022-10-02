import App from '../components/app';
import LandingPage from '../pages/landingPage';

export default [{
    path: "/",
    component: LandingPage,
    getIndexRoute(partialNextState, callback) {
        require.ensure([], function (require) {
            callback(null, {
                component: require('../pages/landingPage'),
            })
        })
    }
}, {
    component: App,
    path: "/hr",
    getIndexRoute(partialNextState, callback) {
        require.ensure([], function (require) {
            callback(null, {
                component: require('hr/pages/auth/login'),
            })
        })
    },
    getChildRoutes(partialNextState, callback) {
        require.ensure([], function (require) {
            callback(null, [
                require("hr/routes/auth"),
                require("hr/routes/home"),
                require("hr/routes/company"),
                require("hr/routes/settings"),
                require("hr/routes/recruitment"),
                require("hr/routes/employee"),
                require("hr/routes/project"),
                require("hr/routes/timesheet"),
                require("hr/routes/payroll"),
                require("hr/routes/organization"),
                require("hr/routes/user")
            ])
        })
    },
}, {
    path: "/notAuthorized",
    getComponents(nextState, callback) {
        require.ensure([], function (require) {
            callback(null, require('../pages/common/notAuthorized'))
        })
    }
}, {
    path: "*",
    getComponents(nextState, callback) {
        require.ensure([], function (require) {
            callback(null, require('../pages/common/notFound'))
        })
    }
}]