import { fromJS, List } from 'immutable';

var initialState = fromJS({
    'data': {
        'payPeriodList': List([]),
        'positionList': List([]),
        'departmentList': List([]),
    }
});

export default function salaryProcessReducer(state = initialState, action) {

    switch (action.type) {
        default:
            return state;
    }
}