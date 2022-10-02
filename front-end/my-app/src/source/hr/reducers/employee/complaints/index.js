import { fromJS, List } from 'immutable';
import uuid from 'node-uuid';

var initialState = fromJS({
    'data': {
      'EmployeeList': List([]),
      'ForwardToList': List([])
    }
});

export default function complaintsReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}