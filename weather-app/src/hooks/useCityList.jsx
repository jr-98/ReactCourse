import { useState, useEffect } from "react";
import axios from "axios";
import { getCityInfo } from "../utils/Urls";
import getAllWeather from "../utils/transform/getAllWeather";

const useCityList = (cities, onSetAllWeather) => {
    // const [allWeather, setAllWeather] = useState([])
    const [error, setError] = useState(null)
    useEffect(() => {
        const setWeather = async (city, countryCode) => {
            const url = getCityInfo({ city, countryCode })
            try {
                const response = await axios.get(url)
                const allWeatherAux = getAllWeather(response, city, countryCode)

                // setAllWeather(allWeather => ({ ...allWeather, ...allWeatherAux }))
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
            setWeather(city, countryCode)
        });
    }, [cities, onSetAllWeather])
    return { error, setError }
}
export default useCityList