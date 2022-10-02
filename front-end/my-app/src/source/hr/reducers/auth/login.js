import { fromJS, List } from 'immutable';
import { SET_LOGIN_FORM } from 'hrConstants/auth';
import { buildNewState } from 'utils/reducer';

var initialState = fromJS({
    'data': {
        'disableForm': false,
        'companyList': List([])
    }
});

export default function hrLoginReducer(state = initialState, action) {

    switch (action.type) {

        case SET_LOGIN_FORM:

            return state.set("data", buildNewState(state.get('data'), action.data));

        default:
            return state;
    }
}