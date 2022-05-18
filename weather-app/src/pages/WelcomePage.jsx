import React, { useMemo } from 'react';
import { Grid, IconButton, Typography, Link } from '@mui/material';
import Welcome from '../components/Welcome';
import IconState from '../components/IconState';
import { Link as LinkRouter } from 'react-router-dom'
import '../index.css'

const WelcomePage = () => {
    const styleOne = useMemo(() => ({ height: '6em' }), [])

    return (
        <Welcome>
            <Grid item xs={12}
                className='highlight'>
                <Grid item container
                    justifyContent={'center'}
                    style={styleOne}>
                    <IconButton color='inherit' aria-label='inicio'>
                        <Grid item>
                            <Link component={LinkRouter} to="/main" color='inherit' aria-label='inicio'>
                                <IconState state='Clear' value='4em' />
                            </Link>
                        </Grid>
                    </IconButton>
                </Grid>
                <Grid item container
                    justifyContent='center'
                    alignItems='center' color='inherit'>
                    <Typography variant='h4'>Weather App</Typography>
                </Grid>
            </Grid>
        </Welcome >
    )
}
export default WelcomePage