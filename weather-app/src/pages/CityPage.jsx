import React from 'react';
import { Grid } from '@mui/material';
import { useParams } from 'react-router-dom'
import CityInfo from '../components/CityInfo';
import Weather from '../components/Weather';
import WeatherDetails from '../components/WeatherDetails';
import Forecast from '../components/Forecast'
import ForecastChart from '../components/ForecastChart'
import AppFrame from '../components/AppFrame';
import useCitypage from '../hooks/useCitypage';


const CityPage = () => {
    const { data, forecastItem } = useCitypage()
    const { city, countryCode } = useParams()
    const country = 'Ecuador'
    const temperature = 12
    const state = 'Clear'
    const humidity = 12
    const wind = 34
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