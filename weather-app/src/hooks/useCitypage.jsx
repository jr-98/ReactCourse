import { useState, useEffect, useDebugValue } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios'
import 'moment/locale/es';//lenguaje
import { getWeather } from "../utils/Urls";
import getChartData from "../utils/transform/getChartData";
import getForecastItemList from "../utils/transform/getForecastItemList";

const useCitypage = () => {
    const [chartData, setChartData] = useState(null)
    const [forecastItem, setForecastItem] = useState(null)
    const { city, countryCode } = useParams()
    const url = getWeather({ city, countryCode })
    useDebugValue(`UseCityPage ${city}`)
    useEffect(() => {
        const getForecast = async () => {
            try {
                const { data } = await axios.get(url)
                const dataAux = getChartData(data)
                setChartData(dataAux)
                const forecastItemAux = getForecastItemList(data)
                setForecastItem(forecastItemAux)
            } catch (error) {
                console.log('Ocurrio un error', error)
            }
        }
        getForecast()
        //eslint-disable-next-line
    }, [])
    return { city, countryCode, chartData, forecastItem }
}


export default useCitypage