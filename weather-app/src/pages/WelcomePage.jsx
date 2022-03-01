import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import AppFrame from '../components/AppFrame';

const WelcomePage = () => {
    const history = useHistory()
    const onClickHandle = () => {
        history.push('./main')
    }
    return (
        <AppFrame>
            <Grid container
                alignContent='center'
                justifyContent='center'
                direction='column'
                style={{ paddingTop: "5vh" }}>
                <Typography variant='h2'>Welcome Page</Typography>
                <Button color='inherit' onClick={onClickHandle}>Ver ciudades</Button>
            </Grid>

        </AppFrame>
    )
}

export default WelcomePage