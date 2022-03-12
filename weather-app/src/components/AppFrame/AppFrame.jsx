import React from 'react';
import { Link as LinkRouter } from 'react-router-dom';
import {
    Grid,
    AppBar,
    Toolbar,
    IconButton,
    Link,
    Typography
} from '@mui/material';
import IconState from '../IconState';
import PropTypes from 'prop-types';

const AppFrame = ({ children }) => {
    return (
        <Grid container
            display={'flex'}
            justifyContent={'center'}
            alignContent={'center'}
        >
            <AppBar position='static'>
                <Toolbar variant='dense'>
                    <IconButton color='inherit' aria-label='menu'>
                        <Grid item>
                            <Link component={LinkRouter} to="/main" color='inherit' aria-label='menu'>
                                <IconState state={'reloadIcon'} value={'3em'}></IconState>
                            </Link>
                        </Grid>

                        <Typography variant='h5' color={'inherit'}>Weather App</Typography>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Grid item
                xs={12}
                sm={11}
                md={10}
                lg={8}>
                {children}
            </Grid>
        </Grid >
    )
}
AppFrame.propTypes = {
    children: PropTypes.node
}
export default AppFrame