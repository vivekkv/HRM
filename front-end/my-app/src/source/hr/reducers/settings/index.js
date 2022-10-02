import { combineReducers } from 'redux';
import userManagement from './userManagement';
import systemSettings from './systemSettings';

export default combineReducers({
    'userManagement': userManagement,
    'systemSettings': systemSettings
})