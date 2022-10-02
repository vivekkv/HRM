import { fromJS, List } from 'immutable';
import constantCreator from 'hrConstants/constantCreator';
import { buildNewState } from 'utils/reducer';
import { LOCATION_CHANGE } from 'react-router-redux';

var initialState = fromJS({
    'data': {
       'CompanyTypeList': List([]),
       'CountryList': List([]),
       'StateList': List([]),
       'companyList': List([]),
       'ShowAddForm': false
    }
});

export default function companyReducer(state = initialState, action) {

    let setForm = constantCreator("COMPANY", "SET_FORM");
    let clearState = constantCreator("COMPANY", "CLEAR_STATE")
    
    switch (action.type) {

        case setForm:

            return state.set("data", buildNewState(state.get('data'), action.data));

        case clearState:
        case LOCATION_CHANGE:

            return state.set("data", state.get("data")
            .set("Name", null)
            .set("TradeName", null)
            .set("RegistrationNo", null)
            .set("CompanyTypeId", null)
            .set("Email", null)
            .set("ContactPerson", null)
            .set("ContactNumber", null)
            .set("Website", null)
            .set("TaxNumber", null)
            .set("CountryId", null)
            .set("StateId", null)
            .set("City", null)
            .set("Zip", null)
            .set("Address", null)
            .set("Id", null))
            
        default:
            return state;
    }
}