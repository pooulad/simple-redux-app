const redux = require("redux");
const createStore = redux.legacy_createStore;

const BUY_CAKE = "BUY_CAKE"
const BUY_ICECREAM = "BUY_ICECREAM"


function buyCake() {
    return {
        type: BUY_CAKE,
        info: "First redux action",
    }
}

function buyIceCream() {
    return {
        type: BUY_ICECREAM,
        info: "First redux action",
    }
}

// (previousState, action) => newState

const initialState = {
    numberOfCakes: 10,
    numberOfIceCreams: 10
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numberOfCakes: state.numberOfCakes - 1
            }
        case BUY_ICECREAM:
            return {
                ...state,
                numberOfIceCreams: state.numberOfIceCreams - 1
            }
        default: return state;
    }
}
const store = createStore(reducer);

console.log("initial state is : ", store.getState());
const unsubscribe = store.subscribe(() => console.log("store updated", store.getState()));

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();