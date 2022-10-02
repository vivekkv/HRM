import { fromJS, List } from 'immutable';
import uuid from 'node-uuid';

var initialState = fromJS({
    'data': {
      'SystemAdminList': List([]),
      'ProjectList': List([]),
      'PriorityList': List([]),
      'EmployeesList': List([]),
    }
});

export default function assignmentReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}