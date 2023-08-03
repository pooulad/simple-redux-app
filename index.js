const redux = require("redux");
const createStore = redux.legacy_createStore;
const combineReducers = redux.combineReducers;

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
//==========================================
// (previousState, action) => newState
// const initialState = {
//     numberOfCakes: 10,
//     numberOfIceCreams: 10
// }
//==========================================
// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case BUY_CAKE:
//             return {
//                 ...state,
//                 numberOfCakes: state.numberOfCakes - 1
//             }
//         case BUY_ICECREAM:
//             return {
//                 ...state,
//                 numberOfIceCreams: state.numberOfIceCreams - 1
//             }
//         default: return state;
//     }
// }
//==========================================

const initialCackesState = {
    numberOfCakes: 10,
}

const initialIceCreamsState = {
    numberOfIceCreams: 10
}

const cakeReducer = (state = initialCackesState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numberOfCakes: state.numberOfCakes - 1
            }
        default: return state;
    }
}

const iceCramsReducer = (state = initialIceCreamsState, action) => {
    switch (action.type) {
        case BUY_ICECREAM:
            return {
                ...state,
                numberOfIceCreams: state.numberOfIceCreams - 1
            }
        default: return state;
    }
}

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCramsReducer,
})
const store = createStore(rootReducer);

console.log("Initial state is : ", store.getState());
const unsubscribe = store.subscribe(() => console.log("store updated!!!", store.getState()));

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();