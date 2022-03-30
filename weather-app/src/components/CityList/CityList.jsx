import React from 'react';
import { Grid, List, ListItem, Alert } from '@mui/material';
import PropTypes from 'prop-types';
import useCityList from '../../hooks/useCityList';
import CityInfo from './../CityInfo';
import Weather from './../Weather';
import { getCityCode } from '../../utils/Utils';


//REnderCityAndCOuntry sera una funcion que retorne otra funcion
const renderCityAndCountry = eventOnClickCity => (cityAndCountry, weather) => {
    const { city, country, countryCode } = cityAndCountry
    return (
        <ListItem
            button
            key={getCityCode(city, countryCode)}
            onClick={() => eventOnClickCity(city, countryCode)}>
            <Grid container
                // direction='row'
                style={{ width: '50vw' }}
                alignContent='center'
                alignItems='center'>
                <Grid item md={9} xs={12} >
                    <CityInfo city={city} country={country} />
                </Grid>
                <Grid item md={3} xs={12}>
                    <Weather
                        temperature={weather && weather.temperature}
                        state={weather && weather.state} />
                </Grid>
            </Grid>
        </ListItem>
    );
}

//Recibe como entrada un array
const CityList = ({ cities, onClickCity }) => {
    const { allWeather, error, setError } = useCityList(cities)

    return (
        <>
            <List>
                {
                    cities.map(cityAndCountry => renderCityAndCountry(onClickCity)(cityAndCountry,
                        allWeather[getCityCode(cityAndCountry.city, cityAndCountry.countryCode)]))
                }
            </List>
            {error && <Grid>
                <Alert severity='error'>{error}</Alert>
            </Grid>
            }
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

export default CityList