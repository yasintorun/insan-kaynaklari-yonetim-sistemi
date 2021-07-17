import { USER_LOGIN, USER_LOGOUT } from "../actions/userActions";

const initialState = {
    user: {},
}

export default function UserReducer(state = initialState, {type, payload}) {
    switch (type) {
        case USER_LOGIN:
            return {
                ...state,
                user: payload
            }
    
        case USER_LOGOUT:
            return {
                ...state,
                user: {}
            }

        default:
            return state
    }
}