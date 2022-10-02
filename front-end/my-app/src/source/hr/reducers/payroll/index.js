import { combineReducers } from 'redux';
import salaryComponent from './SalaryComponent';
import salaryGroupReducer from './SalaryGroup';
import payslipFormula from './PayslipFormula';
import assignSalaryGroup from './AssignSalaryGroup';
import shift from './Shift';
import staffShift from './StaffShift';
import payperiod from './Payperiod';
import payperiodClose from './PayperiodClose';
import salaryProcess from './SalaryProcess';

export default combineReducers({
    'salaryComponent': salaryComponent,
    'salaryGroup': salaryGroupReducer,
    'payslipFormula': payslipFormula,
    'assignSalaryGroup': assignSalaryGroup,
    'shift': shift,
    'staffShift': staffShift,
    'payPeriod': payperiod,
    'payPeriodClose': payperiodClose,
    'salaryProcess': salaryProcess
})