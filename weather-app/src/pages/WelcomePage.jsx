import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import AppFrame from '../components/AppFrame';

const WelcomePage = () => {
    return (
        <AppFrame>
            <Grid container alignContent='center' justifyContent='center' style={{ paddingTop: "5vh" }}>
                <Typography variant='h2'>Welcome Page</Typography>
            </Grid>

        </AppFrame>
    )
}

export default WelcomePage