import { combineReducers } from "redux";
import { createSelector } from "reselect";
import { city } from "./city";
import {
    cities,
    getForecasDataFromCities as _getForecasDataFromCities,
    getWeatherCities as _getWeatherCities
} from "./cities";

export default combineReducers({
    city,
    cities
})
//reselct estruc
//createSelector(...inputSelectors | [inputSelectors, resultFunc])
//Toma a uno a mas selectores (array de selectores) computa sus valores y los 
//pasa como argumentos el resultado a la funcion Final
export const getCity = createSelector(state => state.city, city => city)
export const getForecasDataFromCities = createSelector(state => state.cities, getCity, _getForecasDataFromCities)
export const getWeatherCities = createSelector(state => state.cities, _getWeatherCities)