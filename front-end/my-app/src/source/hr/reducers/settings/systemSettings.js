import { fromJS, List } from 'immutable';

var initialState = fromJS({
    'data': {
        'TimezoneList': List([]),
        'DateFormatList': List([]),
        'TimeFormatList': List([]),
        'GridRowCountList': List([]),
        'CurrencyList': List([])
    }
});

export default function systemSettingsReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}