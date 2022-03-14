import React from 'react';
import { Grid, Typography, Paper } from '@mui/material';
import { useHistory } from 'react-router-dom';
import CityList from '../components/CityList';
import AppFrame from '../components/AppFrame';

const MainPage = () => {
    const history = useHistory()
    const onClickHandler = (city, countryCode) => {
        //nos permite trabajar con la URL y cambiarla (modicfica el historia del navegador)
        history.push(`/city/${city}/${countryCode}`)
    }
    const cities = [
        { city: "Mexico", country: "Mexico", countryCode: "MX" },
        { city: "Buenos Aires", country: "Argentina", countryCode: "AR" },
        { city: "Madrid", country: "España", countryCode: "ES" },
        { city: "Loja", country: "Ecuador", countryCode: "EC" },
    ]
    return (
        <AppFrame>
            <Grid container
                direction='column'
                alignContent='center'
                justifyContent='center'>
                <Grid style={{ display: 'flex', justifyContent: 'center' }} >
                    <Typography variant='h2'>Weather App</Typography>
                </Grid>
                <Grid item>
                    <Grid container style={{ paddingTop: '5vh' }}>
                        <Paper elevation={10}>
                            <CityList
                                cities={cities}
                                onClickCity={onClickHandler}>
                            </CityList>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid >
        </AppFrame>
    )
}

export default MainPage