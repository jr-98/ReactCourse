import React from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import CityList from '../components/CityList'
const MainPage = () => {
    const history = useHistory()
    const onClickHandler = () => {
        //nos permite trabajar con la URL y cambiarla (modicfica el historia del navegador)
        history.push("/city")
    }
    const cities = [
        { city: "Pekin", country: "China" },
        { city: "Shangai", country: "China" },
        { city: "Buenos Aires", country: "Argentina" },
        { city: "Loja", country: "Ecuador" },
    ]
    return (
        <Grid container
            direction='column'
            alignContent='center'
            justifyContent='center'>
            <Grid style={{ display: 'flex', justifyContent: 'center' }} >
                <Typography variant='h2'>Weather App</Typography>
            </Grid>
            <Grid item>
                <Grid container>
                    <CityList cities={cities} onClickCity={onClickHandler}></CityList>
                </Grid>
            </Grid>

        </Grid >
    )
}

export default MainPage