import React from 'react';
import PropTypes from 'prop-types';
import ForeCastsItem from '../ForeCastsItem';
import { Grid } from '@material-ui/core';
import { validValues } from '../IconState';

const renderForecastItem = (forecast) => {
    const { weekDay, hour, state, temperature } = forecast
    //Cuando se tiene una lista es necesario establmecer un identificador unico
    return (
        <Grid
            container data-testid="forecast-item-container"
            key={`${weekDay}${hour}`}>
            <ForeCastsItem
                weekDay={weekDay}
                hour={hour}
                state={state}
                temperature={temperature} />
        </Grid>
    )
}
const Forecast = ({ forecastItemList }) => {
    return (
        <Grid container
            justifyContent='center'
            alignContent='center'
            alignItems='center'>
            {forecastItemList.map(forecast => renderForecastItem(forecast))}
        </Grid>
    )
}
// ForecastItemList es un array de elementos
// Los elementos debene temer una forma en partucular
//es decir, la dieguientes propiedades
/*
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
    state: PropTypes.oneOf(validValues).isRequired,
    temperature: PropTypes.number.isRequired,
*/
Forecast.propTypes = {
    forecastItemList: PropTypes.shape({
        weekDay: PropTypes.string.isRequired,
        hour: PropTypes.number.isRequired,
        state: PropTypes.oneOf(validValues).isRequired,
        temperature: PropTypes.number.isRequired,
    }).isRequired
}

export default Forecast