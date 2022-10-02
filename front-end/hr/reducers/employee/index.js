import { combineReducers } from 'redux';
import root from './root';
import contract from './contracts';
import assignments from './assignments';
import resignation from './resignation';
import achievement from './achievement';
import promotion from './promotion';
import complaints from './complaints';
import warning from './warnings';
import termination from './termination';
import employeeExit from './employeeExit';

export default combineReducers({
    'root': root,
    'contract': contract,
    'assignments': assignments,
    'resignation': resignation,
    'achievement': achievement,
    'promotion': promotion,
    'complaints': complaints,
    'warning': warning,
    'termination': termination,
    'employeeExit': employeeExit
})