import { combineReducers } from 'redux';
import companyRoot from './root';
import branch from './branch';
import department from './department';

export default combineReducers({
    'root': companyRoot,
    'branch': branch,
    'department': department
})