import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';
import rootReducer from "./rootReducer";
import logger from "redux-logger";


const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(logger)
    // other store enhancers if any
));

export default store;