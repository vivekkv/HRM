import { fromJS, List } from 'immutable';

var initialState = fromJS({
    'data': {
        'salaryGroupList': List([]),
        'salaryComponentList': List([]),
        'salaryComponentGridList': List([]),
        'payslipFormulaList': List([])
    }
});

export default function payslipFormulaReducer(state = initialState, action) {

    switch (action.type) {
        default:
            return state;
    }
}