import moment from 'moment'
import { toCelcius } from '../Utils'

const getChartData = (data) => {
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
    }).filter(item => item.hasTemps)
    return (dataAux)
}
export default getChartData