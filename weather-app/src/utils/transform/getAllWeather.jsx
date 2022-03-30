import { getCityCode, toCelcius } from '../Utils'

const getAllWeather = (response, city, countryCode) => {
    const { data } = response

    const temperature = toCelcius(data.main.temp)
    const state = data.weather[0].main
    const humidity = data.main.humidity
    const wind = data.wind.speed
    const propName = getCityCode(city, countryCode)//eEj;[Ciudad de Mexico]
    const propValue = { temperature, state, humidity, wind } //Ej: temperature:10, state:"Clear"
    return ({ [propName]: propValue })
}
export default getAllWeather
