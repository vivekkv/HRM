import { fromJS, List } from 'immutable';

var initialState = fromJS({
    'data': {
        'staffList': List([]),
        'groupList': List([]),
        'groupAssignList': List([])
    }
});

export default function assignSalaryGroupReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}