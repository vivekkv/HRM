import { INPUT_CHANGED, SET_FORM } from 'hrConstants/settings/userManagement/root';

export function inputChanged(name, value) {
    return {
        type: INPUT_CHANGED,
        name,
        value
    }
}

export function setForm(data) {
    return {
        type: SET_FORM,
        data
    }
}