import transformForecast from "../services/transformForecast";
import transformWeather from "../services/transformWeather";

//cracion de constantes, por convencion, las conatantes se las declara en mayúscul;a
export const SET_CITY = 'SET_CITY'
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA'
export const GET_WEATHER_CITY = 'GET_WEATHER_CITY'
export const SET_WEATHER_CITY = 'SET_WEATHER_CITY'

const setCity = payload => ({ type: SET_CITY, payload })//No se export porque se la utiliza de forma intena L24
export const setForecastData = payload => ({ type: SET_FORECAST_DATA, payload })

const getWeatherCity = payload => ({ type: GET_WEATHER_CITY, payload });
const setWeatherCity = payload => ({ type: SET_WEATHER_CITY, payload });

const api_key = "39580df38198d2bed5ddb16e4ab7c8e6";
const url = "http://api.openweathermap.org/data/2.5/forecast";
const url_weather = "http://api.openweathermap.org/data/2.5/weather";

export const setSelectedCity = payload => {
    return dispatch => {
        const url_forecast = `${url}?q=${payload}&appid=${api_key}`;
        //Activar el estaoo de uninidcador para la busqueda de datos
        dispatch(setCity(payload));

        return fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data => {
                console.log(weather_data);
                const forecastData = transformForecast(weather_data && weather_data);
                console.log(forecastData);
                //modifica el estado con el resultado de la promise
                dispatch(setForecastData({ city: payload, forecastData }))
            }
        );
    }
}

export const setWeather = payload => {
    return dispatch => {
        payload.forEach(city => {
            dispatch(getWeatherCity(city));
            const api_weather = `${url_weather}?q=${city}&appid=${api_key}`;
            fetch(api_weather).then(data => {
                return data.json();
            }).then(weather_data => {
                const weather = transformWeather(weather_data);
                dispatch(setWeatherCity({ city, weather }));
            });
        })
    }
};