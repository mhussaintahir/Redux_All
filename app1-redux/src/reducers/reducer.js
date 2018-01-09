

let func1 = (state = 0, action) => {
    switch (action.type) {
        case 'START':
            return state + 1
        case 'STOP':
            return state - 1
        default:
            return state
    }


}


export default func1;