import { combineReducers } from 'redux';
import attendence from './attendence';
import EmployeeHours from './employeeHours';
import Leaves from './leaves';
import Worksheet from './worksheet';
import Holidays from './holidays';

export default combineReducers({
    'attendence': attendence,
    'employeeHours': EmployeeHours,
    'leaves': Leaves,
    'worksheet': Worksheet,
    'holidays': Holidays
})