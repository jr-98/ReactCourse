import React from 'react'
import ForecastItem from './ForecastItem'

export default {
    title: "ForecastItem",
    component: ForecastItem
}
export const sunnyMonday = () => (
    <ForecastItem
        hour={10}
        state="clear"
        temperature={23}
        weekDay="lunes"
    />)

