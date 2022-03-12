import React, { useEffect, useState } from 'react';
import { Grid, List, ListItem, Alert } from '@mui/material';
import convertUnits from 'convert-units'
import PropTypes from 'prop-types';
import axios from 'axios';
import CityInfo from './../CityInfo';
import Weather from './../Weather';

const getCityCode = (city, countryCode) => `${city}-${countryCode}`
//REnderCityAndCOuntry sera una funcion que retorne otra funcion
const renderCityAndCountry = eventOnClickCity => (cityAndCountry, weather) => {
    const { city, country } = cityAndCountry
    return (
        <ListItem
            button
            key={getCityCode(city)}
            onClick={eventOnClickCity}>
            <Grid container
                // direction='row'
                style={{ width: '50vw' }}
                alignContent='center'
                alignItems='center'>
                <Grid item md={9} xs={12}>
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
    const [allWeather, setAllWeather] = useState([])
    const [error, setError] = useState()
    useEffect(() => {
        const setWeather = async (city, countryCode) => {
            const url = 'https://api.openweathermap.org/data/2.5/weather?q='
            const apiKey = '&appid=39580df38198d2bed5ddb16e4ab7c8e6'
            try {
                const response = await axios.get(`${url}${city},${countryCode}${apiKey}`)
                const { data } = response
                const temperature = Number(convertUnits(data.main.temp).from("K").to("C").toFixed(0))
                const state = data.weather[0].main
                const propName = getCityCode(city, countryCode)//eEj;[Ciudad de Mexico]
                const propValue = { temperature, state } //Ej: temperature:10, state:"Clear"
                setAllWeather(allWeather => ({ ...allWeather, [propName]: propValue }))
            } catch (error) {
                if (error.response !== undefined) {//El server respoonde para se produce un error 
                    setError('!Ups, al parecer existen problemas con nuestro servicio')
                } else if (error.request) {//Errores en al que no existe comunicacion entre el hostt y el server
                    setError('Verifique su conexion a internet')
                } else {//Errores inesperados e imprevistos
                    setError('Error imprevisto')
                }
            }
        }
        cities.forEach(({ city, countryCode }) => {
            setWeather(city, countryCode)
        });
    }, [cities])

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