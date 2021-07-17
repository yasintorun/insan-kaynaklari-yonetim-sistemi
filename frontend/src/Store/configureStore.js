import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools, devToolsEnhancer } from "redux-devtools-extension";
import thunk from "redux-thunk";
import Helper from "../utilities/Helper";
import rootReducer from "./rootReducer";

const middleware = [thunk]

export function configureStore() {
    const preloadedState = Helper.LoadState()

    return createStore(rootReducer,{...preloadedState}, composeWithDevTools(applyMiddleware(...middleware)))
}