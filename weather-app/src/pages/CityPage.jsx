import React, { useMemo } from 'react';
import { Grid, CircularProgress } from '@mui/material';
import CityInfo from '../components/CityInfo';
import Weather from '../components/Weather';
import WeatherDetails from '../components/WeatherDetails';
import Forecast from '../components/Forecast'
import ForecastChart from '../components/ForecastChart'
import AppFrame from '../components/AppFrame';
import useCitypage from '../hooks/useCitypage';
import useCityList from '../hooks/useCityList';
import { getCityCode } from '../utils/Utils';
import { getCountryNameByCountryCode } from '../utils/serviceCities';
import { useWeatherStateContext, useWeatherDispatchContext } from '../WeatherContext';

const CityPage = () => {
    // const { onSetAllWeather, onSetChartData, onSetForecastItem } = actions
    const data = useWeatherStateContext()
    const actions = useWeatherDispatchContext()
    const { allWeather, allChartData, allForecastItem } = data
    const { city, countryCode } = useCitypage(actions, allChartData, allForecastItem)
    const cities = useMemo(() => ([{ city, countryCode, }]), [city, countryCode])

    useCityList(cities, allWeather, actions)
    const cityCode = getCityCode(city, countryCode)
    const weather = allWeather[cityCode]
    const chartData = allChartData[cityCode]
    const forecastItem = allForecastItem[cityCode]
    const country = countryCode && getCountryNameByCountryCode(countryCode)
    const state = weather && weather.state
    const temperature = weather && weather.temperature
    const humidity = weather && weather.humidity
    const wind = weather && weather.wind
    const paddingContainer = useMemo(() => ({ paddingTop: '5vh' }), [])
    const styleOne = useMemo(() => ({ width: 'auto !important' }), [])
    const styleTwo = useMemo(() => ({ width: 'inherit !important' }), [])

    return (
        <AppFrame AppFrame >
            <Grid container
                justifyContent="space-around"
                alignItems='center'
                direction="column"
                spacing={2}
                style={paddingContainer} >
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
                    {
                        humidity && wind &&
                        <Grid item xs={12}>
                            <WeatherDetails humidity={humidity && humidity} wind={wind && wind} />
                        </Grid>
                    }
                    <Grid item>
                        {
                            !chartData && !forecastItem && <CircularProgress />
                        }
                    </Grid>
                </Grid>
                <Grid container style={styleOne}>
                    {
                        chartData && <ForecastChart data={chartData} />
                    }
                </Grid>
                <Grid container style={styleTwo}>
                    {
                        forecastItem && <Forecast forecastItemList={forecastItem} />
                    }
                </Grid>
            </Grid >
        </AppFrame >
    )
}

export default CityPage