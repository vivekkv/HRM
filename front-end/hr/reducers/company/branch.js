import { fromJS, List } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';
import { buildNewState } from 'utils/reducer';
import constantCreator from 'hrConstants/constantCreator';

var initialState = fromJS({
    'data': {
        'companyList': List([]),
        'BranchTypeList': List([]),
        'TimeZoneList': List([]),
        'CountryList': List([]),
        'StateList': List([]),
        'CurrencyList': List([]),
        'BranchList': List([]),
        'ShowAddForm': false
    }
});

export default function branchReducer(state = initialState, action) {

    const SET_FORM = constantCreator("BRANCH", "SET_FORM");
    const CLEAR_STATE = constantCreator("BRANCH", "CLEAR_STATE")

    switch (action.type) {

        case SET_FORM:

            return state.set("data", buildNewState(state.get('data'), action.data));
        
        case CLEAR_STATE:
        case LOCATION_CHANGE:

            return state.set("data", state.get("data")
            .set("Id", null)
            .set("BranchTypeId", null)
            .set("TimezoneId", null)
            .set("CurrencyId", null)
            .set("Email", null)
            .set("CountryId", null)
            .set("StateId", null)
            .set("City", null)
            .set("Zip", null)
            .set("Address", null)
            .set("BranchName", null)
            .set("Status", true)
            )
        default:
            return state;
    }
}