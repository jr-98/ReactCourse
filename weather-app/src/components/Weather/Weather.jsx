import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@material-ui/core';
import IconState, { validValues } from '../IconState';

const Weather = ({ temperature, state }) => {
    return (
        <Grid container
            direction='row'
            justifyContent='center'
            alignItems='center'
            spacing={1}>
            <IconState state={state} value={'7em'} />
            <Typography variant='h2'>{temperature}°C</Typography>
        </Grid>
    )
}

Weather.propTypes = {
    temperature: PropTypes.number.isRequired,
    state: PropTypes.oneOf(validValues).isRequired,
}

export default Weather