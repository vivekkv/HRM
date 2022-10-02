let dispatch = null;

export function setDispatch(objDispatch) {
    dispatch = objDispatch;
}

export function dispatch() {
    return dispatch;
}