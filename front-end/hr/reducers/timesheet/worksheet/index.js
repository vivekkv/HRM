import { fromJS, List } from 'immutable';
import uuid from 'node-uuid';

var initialState = fromJS({
    'data': {
       'EmployeeList': List([]),
       'ProjectList': List([]),
    }
});

export default function LeavesReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}