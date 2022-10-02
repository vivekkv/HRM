import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import hrReducer from 'hr/reducers';
import landingPage from './landingPage';

export default combineReducers({
    'routing': routerReducer,
    'landingPage': landingPage,
    'hr': hrReducer        
})