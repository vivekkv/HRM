import { fromJS } from 'immutable';
import { TOGGLE_SIDE_BAR } from 'hrConstants/home';
import uuid from 'node-uuid';

var initialState = fromJS({
    'layout': {
        'navigation': fromJS({
            'isMiniSideBar': true
        }),
        'header': fromJS({})
    }
});

export default function homeReducer(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_SIDE_BAR:
            return state.set("layout", state.get("layout")
                .set("navigation", state.get("layout")
                    .get("navigation")
                    .set("isMiniSideBar", !state.get("layout").get("navigation").get("isMiniSideBar"))))
        default:
            return state;
    }
}