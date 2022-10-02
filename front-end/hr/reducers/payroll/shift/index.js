import { fromJS, List } from 'immutable';

var initialState = fromJS({
    'data': {
        'shiftList': List([]),
        'shiftDeatils': List([]),
        'defaultshiftDeatils': List([]),
        'Status': "A"
    }
});

export default function salaryGroupReducer(state = initialState, action) {

    switch (action.type) {
        default:
            return state;
    }
}
