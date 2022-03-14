import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import moment from 'moment';
import 'moment/locale/es';//lenguaje
import convertUnits from 'convert-units'
import { Grid } from '@mui/material';
import CityInfo from '../components/CityInfo';
import Weather from '../components/Weather';
import WeatherDetails from '../components/WeatherDetails';
import Forecast from '../components/Forecast'
import ForecastChart from '../components/ForecastChart'
import AppFrame from '../components/AppFrame';


const CityPage = () => {

    // const city = 'Loja'
    const country = 'Ecuador'
    const temperature = 12
    const state = 'Clear'
    const humidity = 12
    const wind = 34

    const [data, setData] = useState(null)
    const [forecastItem, setForecastItem] = useState(null)
    const { city, countryCode } = useParams()
    console.log(city, countryCode);

    useEffect(() => {
        const getForecast = async () => {
            const apiKey = '39580df38198d2bed5ddb16e4ab7c8e6'
            const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${apiKey}`
            try {
                const { data } = await axios.get(url)
                console.log(data)
                const daysAhead = [0, 1, 2, 3, 4, 5]
                const days = daysAhead.map(day => moment().add(day, 'd'))
                const toCelcius = (temp) => Number(convertUnits(temp).from('K').to('C').toFixed(0))

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
    return (
        <AppFrame>
            <Grid container
                justifyContent="space-around"
                alignItems='center'
                direction="column"
                spacing={2}
                style={{ paddingTop: '5vh' }} >
                <Grid item xs={12}
                    justifyContent={"center"}
                    justifyItems={"center"}
                    alignItems={"flex-end"}>
                    <CityInfo city={city} country={country} />
                </Grid>
                <Grid container
                    direction='column'
                    alignItems='center'
                    justifyContent='center'
                    spacing={1}>
                    <Grid item xs={12}>
                        <Weather temperature={temperature} state={state} />
                    </Grid>
                    <Grid item xs={12}>
                        <WeatherDetails humidity={humidity} wind={wind} />
                    </Grid>
                </Grid>
                <Grid container style={{ width: 'auto !important' }}>
                    {
                        data && <ForecastChart data={data} />
                    }
                </Grid>
                <Grid container style={{ width: 'inherit !important' }}>
                    {
                        forecastItem && <Forecast forecastItemList={forecastItem} />
                    }
                </Grid>
            </Grid >
        </AppFrame>
    )
}

export default CityPage