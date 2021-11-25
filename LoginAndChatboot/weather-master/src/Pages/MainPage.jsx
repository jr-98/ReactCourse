import React from 'react';
import { useHistory } from 'react-router-dom';
import AppFrame from './../components/AppFrame';
import Login from './../components/Login';
import Logout from './../components/Logout';
import Paper from '@material-ui/core/Paper';

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
                    <Login />
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
