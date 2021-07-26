import {jobAdvertFilterInitialValues} from '../initialValues/jobAdvertFilter'
import {APPLY_FILTER, REMOVE_FILTER} from '../actions/jobAdvertFilterActions'
const initialState = {
    filter: jobAdvertFilterInitialValues,
}

export default function JobAdvertFilterReducer(state = initialState, {type, payload}) {
    switch (type) {
        case APPLY_FILTER:
            return {
                ...state,
                filter: payload
                
            }
    
        case REMOVE_FILTER:
            return {
                ...state,
                filter: jobAdvertFilterInitialValues,
            }

        default:
            return state;
    }
}