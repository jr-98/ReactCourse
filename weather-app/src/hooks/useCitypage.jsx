import { useEffect, useDebugValue } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios'
import 'moment/locale/es';//lenguaje
import { getWeather } from "../utils/Urls";
import getChartData from "../utils/transform/getChartData";
import getForecastItemList from "../utils/transform/getForecastItemList";
import { getCityCode } from "../utils/Utils";

const useCitypage = (actions, allChartData, allForecastItem) => {
    const { city, countryCode } = useParams()
    useDebugValue(`UseCityPage ${city}`)
    useEffect(() => {
        const getForecast = async () => {
            const url = getWeather({ city, countryCode })
            const cityCode = getCityCode(city, countryCode)
            try {
                const { data } = await axios.get(url)
                const dataAux = getChartData(data)
                actions({ type: 'SET_CHART_DATA', payload: { [cityCode]: dataAux } })
                // onSetChartData({ [cityCode]: dataAux })
                const forecastItemAux = getForecastItemList(data)
                // onSetForecastItem({ [cityCode]: forecastItemAux })
                actions({ type: 'SET_FORECAST_ITEM_LIST', payload: { [cityCode]: forecastItemAux } })
            } catch (error) {
                console.log('Ocurrio un error', error)
            }
        }
        const cityCode = getCityCode(city, countryCode)
        if (allChartData && allForecastItem && !allChartData[cityCode] && !allForecastItem[cityCode]) {
            getForecast()
        }
        //eslint-disable-next-line
    }, [city, countryCode, actions, allChartData, allForecastItem])

    return { city, countryCode }
}


export default useCitypage