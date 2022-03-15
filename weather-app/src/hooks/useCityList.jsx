import { useState, useEffect } from "react";
import axios from "axios";
import { getCityInfo } from "../utils/Urls";
import { toCelcius } from "../utils/Utils";

const useCityList = ({ cities, getCityCode }) => {
    const [allWeather, setAllWeather] = useState([])
    const [error, setError] = useState()

    useEffect(() => {
        const setWeather = async (city, countryCode) => {
            try {
                const url = getCityInfo({ city, countryCode })
                const response = await axios.get(url)
                const { data } = response
                const temperature = toCelcius(data.main.temp)
                const state = data.weather[0].main
                const propName = getCityCode(city, countryCode)//eEj;[Ciudad de Mexico]
                const propValue = { temperature, state } //Ej: temperature:10, state:"Clear"
                setAllWeather(allWeather => ({ ...allWeather, [propName]: propValue }))
            } catch (error) {
                if (error.response !== undefined) {//El server respoonde para se produce un error 
                    setError('!Ups, al parecer existen problemas con nuestro servicio')
                } else if (error.request) {//Errores en al que no existe comunicacion entre el hostt y el server
                    setError('Verifique su conexion a internet')
                } else {//Errores inesperados e imprevistos
                    setError('Error imprevisto')
                }
            }
        }
        cities.forEach(({ city, countryCode }) => {
            setWeather(city, countryCode)
        });
    }, [cities])
    return {
        allWeather,
        error,
        setError
    }
}
export default useCityList