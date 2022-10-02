import { fromJS, List } from 'immutable';
import uuid from 'node-uuid';

var initialState = fromJS({
    'data': {
      'EmployeeList': List([]),
      'ForwardToList': List([]),
      'TerminationTypeList': List([]),
    }
});

export default function terminationReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}