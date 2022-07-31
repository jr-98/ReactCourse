import React, { useMemo } from 'react';
import { Link as LinkRouter } from 'react-router-dom';
import { Typography, Grid, IconButton, Link } from '@mui/material';
import IconState from '../components/IconState';
import NoFound from '../components/NoFound'
import '../index.css'
const NoFoundPage = () => {
    const styleOne = useMemo(() => ({ height: '6em' }), [])
    return (
        <NoFound>
            <Grid item xs={12}
                className='highlightNF'>
                <Grid item container
                    justifyContent={'center'}
                    style={styleOne}>
                    <IconButton color='inherit' aria-label='inicio'>
                        <Grid item>
                            <Link component={LinkRouter} to="/main" color='inherit' aria-label='inicio'>
                                <IconState state='lighning' value='4em' />
                            </Link>
                        </Grid>
                    </IconButton>
                </Grid>
                <Grid item container
                    justifyContent='center'
                    alignItems='center' color='inherit'>
                    <Typography variant='h4'>404|La página no existe</Typography>
                </Grid>
            </Grid>
        </NoFound>
    )
}
export default NoFoundPage