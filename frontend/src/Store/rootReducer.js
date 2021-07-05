import { combineReducers } from "redux";
import cityReducer from "./reducers/CityReducer";


const rootReducer = combineReducers({
    cities: cityReducer,
})


export default rootReducer