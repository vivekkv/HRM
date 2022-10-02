import { combineReducers } from 'redux';
import home from './home';
import settings from './settings';
import recruitement from './recruitment';
import employee from './employee';
import project from './project';
import timeSheet from './timesheet';
import payroll from './payroll';
import company from './company';
import organization from './organization';
import auth from './auth';
import user from './user';

export default combineReducers({
    'auth': auth,
    'home': home,
    'settings': settings,
    'company': company,
    'recruitement': recruitement,
    'employee': employee,
    'project': project,
    'timesheet': timeSheet,
    'payroll': payroll,
    'organization': organization,
    'user': user
})