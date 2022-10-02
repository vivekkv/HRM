import { fromJS, List } from 'immutable';
import uuid from 'node-uuid';

var initialState = fromJS({
    'data': {
       'BranchList': List([]),
       'DepartmentList': List([]),
       'EmployeeTypeList': List([]),
       'EmployeeCategory': List([]),
    }
});

export default function LeavesReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}