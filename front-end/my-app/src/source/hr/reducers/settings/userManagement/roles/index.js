import { fromJS, List } from 'immutable';
import { buildNewState } from 'utils/reducer';
import constantCreator from 'hrConstants/constantCreator';
import { LOCATION_CHANGE } from 'react-router-redux';

var initialState = fromJS({
    'data': {
       'RoleList': List([]),
       'showDeleteConfirm': false
    }
}); 

export default function rolesReducer(state = initialState, action) {

    let setForm = constantCreator("ROLE", "SET_FORM");
    let clearState = constantCreator("ROLE", "CLEAR_STATE")

    switch (action.type) {

        case setForm: 

            return state.set("data", buildNewState(state.get('data'), action.data));

        case clearState:
        case LOCATION_CHANGE:

            return state.set("data", state.get("data")
            .set("Role", null)
            .set("Id", null)
            .set("Status", null));

        default:
            return state;
    }
}