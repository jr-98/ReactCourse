import React from 'react';
import { Grid } from '@mui/material';
import CityInfo from '../components/CityInfo';
import Weather from '../components/Weather';
import WeatherDetails from '../components/WeatherDetails';
import Forecast from '../components/Forecast'
import ForecastChart from '../components/ForecastChart'
import AppFrame from '../components/AppFrame';

const CityPage = () => {
    const city = 'Loja'
    const country = 'Ecuador'
    const temperature = 12
    const state = 'Clear'
    const humidity = 12
    const wind = 34
    const data = [
        {
            "dayHour": "Jue 18",
            "min": 14,
            "max": 22,
        },
        {
            "dayHour": "Vie 06",
            "min": 18,
            "max": 27,
        },
        {
            "dayHour": "Vie 12",
            "min": 18,
            "max": 28,
        },
        {
            "dayHour": "Vie 18",
            "min": 18,
            "max": 25,
        },
        {
            "dayHour": "Sab 06",
            "min": 15,
            "max": 22,
        },
        {
            "dayHour": "Sab 12",
            "min": 12,
            "max": 19,
        }
    ]
    const list = [
        {
            weekDay: 'Lunes',
            hour: 12,
            state: 'Clear',
            temperature: 34,
        },
        {
            weekDay: 'Martes',
            hour: 15,
            state: "Clouds",
            temperature: 10,
        },
        {
            weekDay: 'Miercoles',
            hour: 6,
            state: 'Rain',
            temperature: 5,
        },
        {
            weekDay: 'Jueves',
            hour: 14,
            state: 'Snow',
            temperature: 3,
        },
        {
            weekDay: 'Viernes',
            hour: 9,
            state: 'Drizzle',
            temperature: 12,
        },
        {
            weekDay: 'Sábado',
            hour: 20,
            state: 'Thunderstorm',
            temperature: 8,
        },
        {
            weekDay: 'Domingo',
            hour: 20,
            state: 'Fog',
            temperature: 8,
        },
        {
            weekDay: 'Domingo',
            hour: 20,
            state: 'Tornado',
            temperature: 0,
        },
    ]
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
                    <ForecastChart data={data} />
                </Grid>
                <Grid container style={{ width: 'inherit !important' }}>
                    <Forecast forecastItemList={list} />
                </Grid>
            </Grid >
        </AppFrame>
    )
}

export default CityPage