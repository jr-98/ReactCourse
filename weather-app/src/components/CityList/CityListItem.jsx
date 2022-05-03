import React from 'react'
import { Grid, ListItem } from '@mui/material'
import CityInfo from '../CityInfo'
import Weather from '../Weather'

const CityListItem = React.memo((city) => {
    const { weather, eventOnClickCity } = city
    return (
        <ListItem
            button
            onClick={() => eventOnClickCity(city.city, city.countryCode)}>
            <Grid container
                // direction='row'
                style={{ width: '50vw' }}
                alignContent='center'
                alignItems='center'>
                <Grid item md={9} xs={12} >
                    <CityInfo city={city.city} country={city.county} />
                </Grid>
                <Grid item md={3} xs={12}>
                    <Weather
                        temperature={weather && weather.temperature}
                        state={weather && weather.state} />
                </Grid>
            </Grid>
        </ListItem>
    )
})

CityListItem.propTypes = {}

export default CityListItem