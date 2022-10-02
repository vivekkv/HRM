import { fromJS, List } from 'immutable';
import uuid from 'node-uuid';

var initialState = fromJS({
    'data': {
      'companyList': List([]),
      'BranchList': List([]),
      'DepartmentList': List([]),
      'EmployeesList': List([])
    }
});

export default function projectReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}