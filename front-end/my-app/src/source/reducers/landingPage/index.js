import { fromJS, List } from 'immutable';
import { TOGGLE_HR_LOGIN_FORM } from '../../constants/landingPage';

var initialState = fromJS({
    'data': {
       'showLogin': false
    }
});

export default function landingPageReducer(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_HR_LOGIN_FORM:
            return state.set("data", state.get("data").set("showLogin", action.showLogin))
        default:
            return state;
    }
}