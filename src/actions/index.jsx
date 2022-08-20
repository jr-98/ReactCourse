import transformForecast from "../services/transformForecast";

//cracion de constantes, por convencion, las conatantes se las declara en mayúscul;a
export const SET_CITY = 'SET_CITY'
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA'
export const SET_WEATHER = 'SET_WEATHER'
//No se export porque se la utiliza de forma intena L17
const setCity = payload => ({ type: SET_CITY, payload })
export const setForecastData = payload => ({ type: SET_FORECAST_DATA, payload })

const api_key = "f99bbd9e4959b513e9bd0d7f7356b38d";
const url = "http://api.openweathermap.org/data/2.5/forecast";

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
    // const api_key = "f99bbd9e4959b513e9bd0d7f7356b38d";
    // const url = "http://api.openweathermap.org/data/2.5/weather";
    // constructor({ city }) {
    //     super();
    //     this.state = {
    //         city,
    //         data: null
    //     };
    // }

    // componentWillMount() {
    //     const { city } = this.state;
    //     const api_weather = `${url}?q=${city}&appid=${api_key}`;
    //     fetch(api_weather).then(data => {
    //         return data.json();
    //     }).then(weather_data => {
    //         const data = transformWeather(weather_data);
    //         this.setState({ data });
    //     });

    // 
}