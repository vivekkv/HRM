import { combineReducers } from 'redux';
import accessControl from './accessControl';
import roles from './roles';
import root from './root';

export default combineReducers({
    'roles': roles,
    'accessControl': accessControl,
    'root': root
})  