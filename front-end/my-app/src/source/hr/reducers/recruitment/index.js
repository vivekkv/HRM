import { combineReducers } from 'redux';
import settings from './settings';
import jobpost from './jobpost';

export default combineReducers({
    'settings': settings,
    'jobpost': jobpost
})