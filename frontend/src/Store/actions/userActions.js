import UserService from "../../services/userService";
import Helper from "../../utilities/Helper";

export const USER_LOGIN = "USER_LOGIN"
export const USER_LOGOUT = "USER_LOGOUT"

let userService = new UserService()


export const userLogin = (loginVal) => async (dispatch) => {
    return await userService.login(loginVal)
        .then(result => {
            if(result.data.success) {
                dispatch({type: USER_LOGIN, payload: result.data.data})
            } 
            
            Helper.ToastInfo(result.data.success, result.data.message)
            
            return result.data;
        })
}


export const userLogout = () =>  {
    Helper.deleteState()
    return {
        type: USER_LOGOUT,
    }
}