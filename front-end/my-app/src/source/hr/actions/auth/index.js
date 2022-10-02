import { SET_LOGIN_FORM, INPUT_CHANGED, SUBMIT_LOGIN } from 'hrConstants/auth';

export function setForm(data) {
    return {
        type: SET_LOGIN_FORM,
        data
    }
}

export function inputChanged(name, value) {
    return {
        type: INPUT_CHANGED,
        name,
        value
    }
}

export function submitLogin() {
    return {
        type: SUBMIT_LOGIN
    }
}