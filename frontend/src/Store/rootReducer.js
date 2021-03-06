import { combineReducers } from "redux";
import JobAdvertFilterReducer from "./reducers/JobAdvertFilterReducer";
import resumeReducer from "./reducers/resumeReducer";
import UserReducer from "./reducers/userReducer";


const rootReducer = combineReducers({
    resume: resumeReducer,
    user: UserReducer,
    jobAdvertFilter: JobAdvertFilterReducer
})


export default rootReducer