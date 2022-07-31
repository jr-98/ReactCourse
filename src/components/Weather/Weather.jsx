import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography, Skeleton } from '@mui/material';
import IconState, { validValues } from '../IconState';

const Weather = ({ temperature, state }) => {
    const iconStateSize = useMemo(() => ('5em'), [])
    const styleSkeleton = useMemo(() => (80), [])
    return (
        <Grid container
            direction='row'
            justifyContent='center'
            alignItems='center'
            spacing={1}>
            {
                state ?
                    <IconState state={state} value={iconStateSize} />
                    :
                    <Skeleton variant="circular" height={styleSkeleton} width={styleSkeleton} />
            }
            {
                temperature ?
                    <Typography display='inline' variant='h4'>{temperature}°C</Typography>
                    :
                    <Skeleton ariant="rectangular" height={styleSkeleton} width={styleSkeleton} />
            }
        </Grid>
    )
}

Weather.propTypes = {
    temperature: PropTypes.number,
    state: PropTypes.oneOf(validValues),
}

export default Weather