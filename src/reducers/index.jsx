import { combineReducers } from "redux";
import { createSelector } from "reselect";
import { city } from "./city";
import {
    cities,
    getForecastDataFromCities as _getForecastDataFromCities,
    getWeatherCities as _getWeatherCities
} from "./cities";

export default combineReducers({
    cities,
    city
})
//reselct estrucp
//createSelector(...inputSelectors | [inputSelectors, resultFunc])
//Toma a uno a mas selectores (array de selectores) computa sus valores y los 
//pasa como argumentos el resultado a la funcion Final
export const getCity = createSelector(state => state.city, city => city);

export const getForecastDataFromCities = createSelector(state => state.cities, getCity, _getForecastDataFromCities);

export const getWeatherCities = createSelector(state => state.cities, _getWeatherCities)