import React from 'react';
import { List, Alert } from '@mui/material';
import PropTypes from 'prop-types';
import useCityList from '../../hooks/useCityList';
import { getCityCode } from '../../utils/Utils';
import CityListItem from './CityListItem';

//REnderCityAndCOuntry sera una funcion que retorne otra funcion
const renderCityAndCountry = eventOnClickCity => (cityAndCountry, weather) => {
    // const { city, country, countryCode } = cityAndCountry
    const { city, countryCode } = cityAndCountry
    return <CityListItem key={getCityCode(city, countryCode)}
        // Se puede pasar todas las propiedades de un objeto mediante destructuring
        // Pros con menos codigo (18) se hace hace lo mismo que en (11)
        // Contras: Puede que el componente invocado no necesite todas las oripuedades del objeto del destructuring
        {...cityAndCountry}
        eventOnClickCity={eventOnClickCity}
        weather={weather} />
}

//Recibe como entrada un array
const CityList = ({ cities, onClickCity, data, actions }) => {
    // const { onSetAllWeather } = actions
    const { allWeather } = data
    const { error, setError } = useCityList(cities, allWeather, actions)
    return (
        <>

            {
                error && <Alert onClose={() => setError(null)} severity='error'>{error}</Alert>
            }
            <List>
                {
                    cities.map(cityAndCountry => renderCityAndCountry(onClickCity)(cityAndCountry,
                        allWeather[getCityCode(cityAndCountry.city, cityAndCountry.countryCode)]))
                }
            </List>
        </>
    );
}

CityList.propTypes = {
    cities: PropTypes.arrayOf(
        PropTypes.shape({
            city: PropTypes.string.isRequired,
            countryCode: PropTypes.string.isRequired
        }),
    ).isRequired,
    onClickCity: PropTypes.func.isRequired,

}
export default React.memo(CityList)