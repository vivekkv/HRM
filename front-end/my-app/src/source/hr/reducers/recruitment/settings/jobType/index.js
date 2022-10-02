import { fromJS, List } from 'immutable';
import uuid from 'node-uuid';

var initialState = fromJS({
    'data': {
    }
});

export default function jobTypeReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}