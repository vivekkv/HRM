import { fromJS, List } from 'immutable';
import uuid from 'node-uuid';

var initialState = fromJS({
    'data': {
      'EmployeeList': List([]),
      'ExitTypeList': List([])
    }
});

export default function employeeExitReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}