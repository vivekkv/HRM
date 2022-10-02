import { fromJS, List } from 'immutable';

var initialState = fromJS({
    'data': {
        'IsDeduction': false,
        'IsFormulaBased': false,
        'IsEditable': false,
        'IsRoundUp': false,
        'salaryComponents': List([])
    }
});

export default function salaryComponentReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}