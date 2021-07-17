import { combineReducers } from "redux";
import resumeReducer from "./reducers/resumeReducer";
import UserReducer from "./reducers/userReducer";


const rootReducer = combineReducers({
    resume: resumeReducer,
    user: UserReducer,
})


export default rootReducer