import moment from 'moment'
import { toCelcius } from '../Utils'

const getForecastItemList = (data) => {
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

    return forecastItemAux
}
export default getForecastItemList