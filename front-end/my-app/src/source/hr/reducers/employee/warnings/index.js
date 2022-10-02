import { fromJS, List } from 'immutable';
import uuid from 'node-uuid';

var initialState = fromJS({
    'data': {
      'WarningToList': List([]),
      'ForwardToList': List([]),
      'WarnedByList': List([]),
      'WarningTypeList': List([])
    }
});

export default function warningReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}