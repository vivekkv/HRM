export function buildNewState(currentState, items) {

    if (Array.isArray(items)) {

        items.forEach((item) => {

            currentState = currentState.set(item.name, item.value)
        });

    } else {

        for(let i in items) {

            currentState = currentState.set(i, items[i])
        }
    }

    return currentState;
}