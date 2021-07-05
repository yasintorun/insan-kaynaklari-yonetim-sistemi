import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools, devToolsEnhancer } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

const middleware = [thunk]

export function configureStore() {
    return createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)))
}