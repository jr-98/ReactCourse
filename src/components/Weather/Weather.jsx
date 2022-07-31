import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography, Skeleton } from '@mui/material';
import IconState, { validValues } from '../IconState';

const Weather = ({ temperature, state }) => {
    return (
        <Grid container
            direction='row'
            justifyContent='center'
            alignItems='center'
            spacing={1}>
            {
                state ?
                    <IconState state={state} value={'5em'} />
                    :
                    <Skeleton variant="circular" height={80} width={80} />
            }
            {
                temperature ?
                    <Typography display='inline' variant='h4'>{temperature}°C</Typography>
                    :
                    <Skeleton ariant="rectangular" height={80} width={80} />
            }
        </Grid>
    )
}

Weather.propTypes = {
    temperature: PropTypes.number,
    state: PropTypes.oneOf(validValues),
}

export default Weather