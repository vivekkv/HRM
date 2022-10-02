import { fromJS, List } from 'immutable';
import { SET_FORM } from 'hrConstants/settings/userManagement/accessControl'
import { buildNewState } from 'utils/reducer';

var initialState = fromJS({
    'data': {
       'AccessControlList': { 'Resources': List([]), 'ResourceOperations': List([]) },
       'RoleList': List([]),
       'RoleAccessControlList': List([]),
       'TreeViewOpenNodes': List([]),
       'AccessControlChangeList': List([])
    }
}); 

export default function accessControlReducer(state = initialState, action) {
    switch (action.type) {

        case SET_FORM: 
            return state.set("data", buildNewState(state.get('data'), action.data));
        default:
            return state;
    }
}