import { fromJS, List } from 'immutable';

var initialState = fromJS({
    'data': {
        'DepartmentHeadsList': List([]),
        'DepartmentList': List([]),
        'JobTypeList': List([])
    }
});

export default function jobPostReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}