import { fromJS, List } from 'immutable';

var initialState = fromJS({
    'data': {
        'payperiodList': List([])
    }
});

export default function payperiodCloseReducer(state = initialState, action) {

    switch (action.type) {
        default:
            return state;
    }
}