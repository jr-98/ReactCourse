import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Typography } from '@material-ui/core'
import IconState, { validValues } from '../IconState'
const ForecastItem = ({ weekDay, hour, state, temperature }) => {
    return (
        <Grid container
            direction='column'
            alignItems='center'
            justifyContent='center'
            alignContent='center'>
            <Grid item>
                <Typography variant='h5'>{weekDay}</Typography>
            </Grid>
            <Grid item>
                <Typography>{hour}</Typography>
            </Grid>
            <Grid item>
                <IconState state={state} />
            </Grid>
            <Grid item>
                <Typography>{temperature}°</Typography>
            </Grid>
        </Grid>
    )
}

ForecastItem.propTypes = {
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
    state: PropTypes.oneOf(validValues).isRequired,
    temperature: PropTypes.number.isRequired,
}

export default ForecastItem
