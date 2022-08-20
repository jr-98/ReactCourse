import { combineReducers } from "redux";
import { city } from "./city";
import { cities, getForecasDataFromCities as _getForecasDataFromCities } from "./cities";

export default combineReducers({
    city,
    cities
})
export const getCity = state => state.city
export const getForecasDataFromCities = state => _getForecasDataFromCities(state.cities, getCity(state))
