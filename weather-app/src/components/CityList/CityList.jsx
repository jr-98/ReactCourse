import React from 'react';
// import PropTypes from 'prop-types';
import CityInfo from './../CityInfo';
import Weather from './../Weather';

const renderCityAndCountry = (cityAndCountry) => {
    const { city, country } = cityAndCountry
    return (
        <li key={city}>
            <CityInfo city={city} country={country} />
            <Weather temperature={12} state='sunny' />
        </li>
    );
}
//Recibe vomo entrada un array

const CityList = ({ cities }) => {
    return (
        <ul>
            {
                cities.map(cityAndCountry => renderCityAndCountry(cityAndCountry))
            }
        </ul>
    );
}

CityList.propTypes = {}

export default CityList