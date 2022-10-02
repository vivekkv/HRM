import { TOGGLE_HR_LOGIN_FORM } from '../../constants/landingPage';

export function toggleHrLoginForm(showLogin) {
    return {
        type: TOGGLE_HR_LOGIN_FORM,
        showLogin
    }
}