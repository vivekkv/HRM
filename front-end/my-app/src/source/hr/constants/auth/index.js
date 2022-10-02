import ConstantBuilder from '../constantCreator';

const MODULE = "AUTH";
const TYPE   = "LOGIN";

export const INPUT_CHANGED = ConstantBuilder(MODULE, TYPE, "INPUT_CHANGED");
export const SET_LOGIN_FORM = ConstantBuilder(MODULE, TYPE, "SET_LOGIN_FORM");
export const SUBMIT_LOGIN = ConstantBuilder(MODULE, TYPE, "SUBMIT_LOGIN");