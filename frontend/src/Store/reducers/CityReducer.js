import { ERROR, GetAllCities, GET_ALL_CITIES } from "../actions/cityActions";
import { getAllCities } from "../initialValues/cities";


const initialState = {
    getAllCities: getAllCities
}



export default function cityReducer(state = initialState, {type, payload}) {
    switch (type) {
        case GET_ALL_CITIES:
            return {
                ...state,
                getAllCities: payload
            }

        case ERROR:
            return {
                ...state,
                errorMsg: payload
            }
    
        default:
            return state
    }
}