import React from 'react';
import { useHistory } from 'react-router-dom';
import AppFrame from './../components/AppFrame';
import Profile from '../components/Profile';

import { Grid } from '@material-ui/core'


const MainPage = props => {
    const history = useHistory()
    return (
        <AppFrame>
            <Grid
                container
                direction="column"
                justify="center"
                className="fullScreen">
                <div>
                    <Profile />
                </div>
            </Grid>
        </AppFrame>
    )

    const onClickHandler = () => {
        //history.puas() nos permite comabiar las urls mediante cod
        history.push('/city')
    }
}

export default MainPage
