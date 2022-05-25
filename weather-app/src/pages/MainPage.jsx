import React, { useMemo } from 'react';
import { Grid, Typography, Paper } from '@mui/material';
import { useHistory } from 'react-router-dom';
import CityList from '../components/CityList';
import AppFrame from '../components/AppFrame';
import { getCities } from '../utils/serviceCities';

const MainPage = () => {
    const history = useHistory()
    const onClickHandler = React.useCallback((city, countryCode) => {
        //nos permite trabajar con la URL y cambiarla (modicfica el historia del navegador)
        history.push(`/city/${city}/${countryCode}`)
    }, [history])
    const paddingContainer = useMemo(() => ({ paddingTop: '5vh' }), [])
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
                    <Grid container style={paddingContainer}>
                        <Paper elevation={10}>
                            <CityList
                                cities={getCities()}
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