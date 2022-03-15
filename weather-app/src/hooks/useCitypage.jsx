import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios'
import moment from "moment";
import 'moment/locale/es';//lenguaje
import { getWeather } from "../utils/Urls";
import { toCelcius } from "../utils/Utils"; 

const useCitypage = props => {
    const [data, setData] = useState(null)
    const [forecastItem, setForecastItem] = useState(null)
    const { city, countryCode } = useParams()
    const url = getWeather({ city, countryCode })
    useEffect(() => {
        const getForecast = async () => {
            try {
                const { data } = await axios.get(url)
                const daysAhead = [0, 1, 2, 3, 4, 5]
                const days = daysAhead.map(day => moment().add(day, 'd'))
                const dataAux = days.map(day => {
                    const tempObj = data.list.filter(item => {
                        const dayOfYear = moment.unix(item.dt).dayOfYear()
                        return dayOfYear === day.dayOfYear()
                    })
                    const temps = tempObj.map(item => item.main.temp)
                    // "dayHour": "Jue 18", "min": 14,"max": 22,
                    return ({
                        dayHour: day.format('ddd'),
                        min: toCelcius(Math.min(...temps)),
                        max: toCelcius(Math.max(...temps)),
                        hasTemps: (temps.length > 0 ? true : false)
                    })
                })
                setData(dataAux)
                // weekDay: 'Lunes', hour: 12, state: 'Clear',temperature: 34,
                const interval = [4, 8, 12, 16, 20, 24]
                const forecastItemAux = data.list
                    .filter((item, index) => interval.includes(index))
                    .map(item => {
                        return ({
                            weekDay: moment.unix(item.dt).format('dddd'),
                            hour: moment.unix(item.dt).hour(),
                            state: item.weather[0].main,
                            temperature: toCelcius(item.main.temp),
                        })
                    })
                setForecastItem(forecastItemAux)
            } catch (error) {
                console.log('Ocurrio un error', error)
            }
        }
        getForecast()
    }, [])
    return { data, forecastItem }
}


export default useCitypage