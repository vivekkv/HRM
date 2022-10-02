import { fromJS, List } from 'immutable';
import { SET_FORM } from 'hrConstants/settings/userManagement/root';
import { buildNewState } from 'utils/reducer';

var initialState = fromJS({
    'data': {
        'defaultTab': null
    }
});

export default function userManagementRootReducer(state = initialState, action) {
    switch (action.type) {

        case SET_FORM: 
            return state.set("data", buildNewState(state.get('data'), action.data));
        default:
            return state;
    }
}