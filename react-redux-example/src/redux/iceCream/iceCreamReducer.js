import { BUY_ICECREAM } from "./iceCreamTypes";

const initialState = {
    numberOfIceCreams: 20,
}

const iceCreamReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_ICECREAM:
            return {
                ...state,
                numberOfIceCreams: state.numberOfIceCreams - 1
            }
        default:
            return state
    }
}

export default iceCreamReducer;