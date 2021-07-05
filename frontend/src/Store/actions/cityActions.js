import CityService from '../../services/cityService'

export const GET_ALL_CITIES = "getAllCities"
export const ERROR = "error"
let cityService = new CityService()


export const GetAllCities = () => {
    return (async (dispatch) => {
        await cityService.getCity()
            .then(result => {
                dispatch({
                    type: GET_ALL_CITIES,
                    payload: result.data.data
                })
            })
            .catch(result => {
                dispatch({
                    type: ERROR,
                    payload: result
                })
            })
    })
}