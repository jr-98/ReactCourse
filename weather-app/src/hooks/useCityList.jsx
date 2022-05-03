import { useState, useEffect } from "react";
import axios from "axios";
import { getCityInfo } from "../utils/Urls";
import getAllWeather from "../utils/transform/getAllWeather";
import { getCityCode } from "../utils/Utils";
import { action } from "@storybook/addon-actions";

const useCityList = (cities, allWeather, actions) => {
    const [error, setError] = useState(null)
    useEffect(() => {
        const setWeather = async (city, countryCode) => {
            const url = getCityInfo({ city, countryCode })
            try {
                // onSetAllWeather({ [getCityCode(city, countryCode)]: {} })
                actions({ type: 'SET_ALL_WEATHER', payload: { [getCityCode(city, countryCode)]: {} } })
                const response = await axios.get(url)
                const allWeatherAux = getAllWeather(response, city, countryCode)
                // onSetAllWeather(allWeatherAux)
                actions({ type:'SET_ALL_WEATHER', payload:allWeatherAux})
                
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
    }, [cities, actions, allWeather])
    return { error, setError }
}
export default useCityList