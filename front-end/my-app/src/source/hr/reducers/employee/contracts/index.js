import { fromJS, List } from 'immutable';
import uuid from 'node-uuid';

var initialState = fromJS({
    'data': {
      'EmployeeList': List([]),
      'ContractTypeList': List([]),
      'DesignationList': List([]),
      'EmployeeTypeList': List([]),
      'EmployeeCategoryList': List([]),
      'EmployeeGradeList': List([]),
      'BranchList': List([]),
      'DepartmentList': List([])
    }
});

export default function contractReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}