import React from 'react'
import PropTypes from 'prop-types'
import {
    WiDayCloudy,
    WiDaySunny,
    WiRain,
    WiSnow,
    WiRaindrop,
    WiThunderstorm,
    WiFog,
    WiTornado,
    WiCloudRefresh,
    WiLightning
} from 'react-icons/wi'
import { IconContext } from 'react-icons/lib'

export const validValues = [
    "Clouds",
    "Clear",
    "Rain",
    "Snow",
    "Drizzle",
    "Thunderstorm",
    "Fog",
    "Tornado",
    "reloadIcon",
    "lighning",
]

const stateByName = {
    Clouds: WiDayCloudy,
    Clear: WiDaySunny,
    Rain: WiRain,
    Snow: WiSnow,
    Drizzle: WiRaindrop,
    Thunderstorm: WiThunderstorm,
    Fog: WiFog,
    Tornado: WiTornado,
    reloadIcon: WiCloudRefresh,
    lighning: WiLightning
}

const IconState = ({ state, value }) => {
    const StateByName = stateByName[state]
    return (
        <IconContext.Provider value={{ size: value }}>
            <StateByName />
        </IconContext.Provider>
    )
}

IconState.propTypes = {
    state: PropTypes.oneOf(validValues).isRequired,
    value: PropTypes.string.isRequired,
}

export default IconState