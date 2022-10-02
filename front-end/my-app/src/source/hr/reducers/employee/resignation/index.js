import { fromJS, List } from 'immutable';
import uuid from 'node-uuid';

var initialState = fromJS({
    'data': {
      'ForwardToList': List([])
    }
});

export default function resignationReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}