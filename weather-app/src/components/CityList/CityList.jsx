import { Grid } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import CityInfo from './../CityInfo';
import Weather from './../Weather';

//REnderCityAndCOuntry sera una funcion que retorne otra funcion

const renderCityAndCountry = eventOnClickCity => cityAndCountry => {
    const { city, country } = cityAndCountry
    return (
        <li key={city} onClick={eventOnClickCity}>
            <Grid container
                display='flex'
                justifyContent='center'
                alignItems='center'>
                <Grid item md={8}
                    xs={12}>
                    <CityInfo city={city} country={country} />
                </Grid>
                <Grid item md={4}
                    xs={12}>
                    <Weather temperature={12} state='sunny' />
                </Grid>
            </Grid>
        </li>
    );
}
//Recibe vomo entrada un array

const CityList = ({ cities, onClickCity }) => {
    return (
        <ul>
            {
                cities.map(cityAndCountry => renderCityAndCountry(onClickCity)(cityAndCountry))
            }
        </ul>
    );
}

CityList.propTypes = {
    onClickCity: PropTypes.func.isRequired,

}

export default CityList