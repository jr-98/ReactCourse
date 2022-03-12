import React, { useEffect, useState } from 'react';
import { Grid, List, ListItem } from '@material-ui/core';
import PropTypes from 'prop-types';
import axios from 'axios';
import CityInfo from './../CityInfo';
import Weather from './../Weather';

//REnderCityAndCOuntry sera una funcion que retorne otra funcion
const renderCityAndCountry = eventOnClickCity => (cityAndCountry, weather) => {
    const { city, country } = cityAndCountry
    return (
        <ListItem
            button
            key={city}
            onClick={eventOnClickCity}>
            <Grid container
                // direction='row'
                style={{ width: '50vw' }}
                alignContent='center'
                alignItems='center'>
                <Grid item
                    md={9}
                    xs={12}>
                    <CityInfo city={city} country={country} />
                </Grid>
                <Grid item
                    md={3}
                    xs={12}>
                    {
                        weather ?
                            <Weather temperature={weather.temperature} state={weather.state} />
                            : "No hay datos"
                    }
                </Grid>
            </Grid>
        </ListItem>
    );
}
//Recibe como entrada un array
const CityList = ({ cities, onClickCity, countryCode }) => {
    const [allWeather, setAllWeather] = useState([])

    useEffect(() => {
        const setWeather = (city, country) => {
            const url = 'https://api.openweathermap.org/data/2.5/weather?q='
            const apiKey = '&appid=39580df38198d2bed5ddb16e4ab7c8e6'

            axios
                .get(`${url}${city},${countryCode}${apiKey}`)
                .then(response => {
                    const { data } = response
                    const temperature = data.main.temp
                    const state = data.weather[0].main
                    const propName = `${city}-${country}`//eEj;[Ciudad de Mexico]
                    const propValue = { temperature, state } //Ej: temperature:10, state:"Clear"
                    console.log(propName)
                    console.log(propValue)
                    setAllWeather({
                        ...allWeather, [propName]: propValue
                    })
                })
        }
        cities.forEach(({ city, country, countryCode }) => {
            setWeather(city, country, countryCode)
        });
    }, [cities])

    return (
        <List>
            {
                cities.map(cityAndCountry => renderCityAndCountry(onClickCity)(cityAndCountry, allWeather[`${cityAndCountry.city}-${cityAndCountry.country}`]))
            }
        </List>
    );
}

CityList.propTypes = {
    cities: PropTypes.shape({
        city: PropTypes.string.isRequired,
        country: PropTypes.string.isRequired,
        countryCode: PropTypes.string.isRequired
    }),
    onClickCity: PropTypes.func.isRequired,

}

export default CityList