import { fromJS, List } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';
import { buildNewState } from 'utils/reducer';
import constantCreator from 'hrConstants/constantCreator';

var initialState = fromJS({
    'data': {
       'BranchList': List([]),
       'DepartmentHeadList': List([]),
       'DepartmentList': List([])
    }
});

export default function departmentReducer(state = initialState, action) {

    const SET_FORM = constantCreator("DEPARTMENT", "SET_FORM");
    const CLEAR_STATE = constantCreator("DEPARTMENT", "CLEAR_STATE")

    switch (action.type) {

        case SET_FORM:

            return state.set("data", buildNewState(state.get('data'), action.data));

        case CLEAR_STATE:
        case LOCATION_CHANGE:

            return state.set("data", state.get("data")
            .set("Id", null)
            .set("BranchId", null)
            .set("DepartmentName", null)
            .set("Status", true))
        default:
            return state;
    }
}