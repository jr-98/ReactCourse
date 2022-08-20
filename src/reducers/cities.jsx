import { SET_FORECAST_DATA } from "../actions";

export const cities = (state = {}, action) => {
    switch (action.type) {
        case SET_FORECAST_DATA:
            //eslint-disable-next-line
            const { city, forecastData } = action.payload;
            return { ...state, [city]: { forecastData, weather: null } };
        default:
            return state;
    }
}

export const getForecasDataFromCities = (state, city) => state[city] && state[city].forecastData;