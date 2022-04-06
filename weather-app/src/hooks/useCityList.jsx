import { useState, useEffect } from "react";
import axios from "axios";
import { getCityInfo } from "../utils/Urls";
import getAllWeather from "../utils/transform/getAllWeather";
import { getCityCode } from "../utils/Utils";

const useCityList = (cities, allWeather, onSetAllWeather) => {
    const [error, setError] = useState(null)
    useEffect(() => {
        const setWeather = async (city, countryCode) => {
            const url = getCityInfo({ city, countryCode })
            try {
                onSetAllWeather({ [getCityCode(city, countryCode)]: {} })
                const response = await axios.get(url)
                const allWeatherAux = getAllWeather(response, city, countryCode)
                onSetAllWeather(allWeatherAux)
            } catch (error) {
                if (error.response) {//El server respoonde para se produce un error 
                    setError('!Ups, al parecer existen problemas con nuestro servicio')
                } else if (error.request) {//Errores en al que no existe comunicacion entre el hostt y el server
                    setError('Verifique su conexion a internet')
                } else {//Errores inesperados e imprevistos
                    setError('Error imprevisto')
                }
            }
        }
        cities.forEach(({ city, countryCode }) => {
            if (!allWeather[getCityCode(city, countryCode)]) {
                setWeather(city, countryCode) // {} Al recibir un objeto vacio es difirente a undefined por lo que el estado de perticion queda en true y no se realizan peticiones extras al server
            }
        });
    }, [cities, onSetAllWeather, allWeather])
    return { error, setError }
}
export default useCityList