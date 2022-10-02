import { fromJS, List } from 'immutable';

var initialState = fromJS({
    'data': {
       'payperiodTypeList': List([]),
       'payperiodLIst': List([])
    }
});

export default function payperiodReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}