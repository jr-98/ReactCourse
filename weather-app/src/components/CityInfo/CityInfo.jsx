import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Typography } from '@mui/material'

const CityInfo = ({ city, country }) => {
    return (
        <Grid item display="flex">
            <Typography display='inline' variant='h4'>{city},</Typography>
            <Typography display='inline' variant='h6'>{country}</Typography>
        </Grid>
    )
}

CityInfo.propTypes = {
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
}

export default CityInfo
