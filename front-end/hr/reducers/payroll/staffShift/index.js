import { fromJS, List } from 'immutable';

var initialState = fromJS({
    'data': {
        'staffList': List([]),
        'shiftList': List([]),
        'staffShiftList': List([]),
        'PunchRequired': false
    }
});

export default function staffShiftReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}