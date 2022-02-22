import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Typography } from '@material-ui/core'
import {
    WiDayCloudy,
    WiDaySunny,
    WiRain,
    WiSnow,
    WiRaindrop,
    WiThunderstorm
} from 'react-icons/wi'
import { IconContext } from 'react-icons/lib'

export const validValues = [
    "clouds",
    "sunny",
    "rain",
    "snow",
    "drizzle",
    "thunderstorm"
]

const stateByName = {
    clouds: WiDayCloudy,
    sunny: WiDaySunny,
    rain: WiRain,
    snow: WiSnow,
    drizzle: WiRaindrop,
    thunderstorm: WiThunderstorm
}
const renderState = state => {
    const IconValue = stateByName[state]
    return <IconValue />
}
const Weater = ({ temperature, state }) => {
    return (
        <Grid container
            direction='row'
            justifyContent='center'
            alignContent='center'
            spacing={1}>
            <IconContext.Provider value={{ size: '4em' }}>
                {renderState(state)}
            </IconContext.Provider>
            <Typography variant='h2'>{temperature}°C</Typography>
        </Grid>
    )
}

Weater.propTypes = {
    temperature: PropTypes.number.isRequired,
    state: PropTypes.oneOf(validValues).isRequired,
}

export default Weater