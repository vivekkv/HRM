import { fromJS, List } from 'immutable';
import uuid from 'node-uuid';

var initialState = fromJS({
    'data': {
       'EmployeeList': List([]),
       'ForwardApplicationToList': List([])
    }
});

export default function attendnceReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}