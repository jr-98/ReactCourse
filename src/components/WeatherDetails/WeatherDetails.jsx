import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Typography } from '@material-ui/core'

const WeatherDetails = ({ humidity, wind }) => {
    return (
        <Grid container direction='row' spacing={1}>
            <Grid item>
                <Typography variant='h6'>Humedad: {humidity}%</Typography>
            </Grid>
            <Grid item>
                <Typography variant='h6'>Viento: {wind}Km/h</Typography>
            </Grid>
        </Grid>
    )
}

WeatherDetails.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.number.isRequired,
}

export default WeatherDetails