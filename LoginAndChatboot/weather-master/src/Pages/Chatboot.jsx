import React from 'react'
import { useHistory } from "react-router-dom";
import Grid from '@material-ui/core/Grid'
import { Button, Box } from '@material-ui/core';
//Import el hook de Auth0
import AppFrame from '../components/AppFrame'

const CityPage = props => {
    const city = "Madrid"
    const history = useHistory();
    const onClickHandlerHome = () => {
        history.push('./')
    }
    return (
        <AppFrame>
            <Grid container
                justify="space-around"
                direction="colum"
                spacing={2}>
                <Grid item container
                    xs={12}
                    justify="center"
                    alignItems="flex-end">
                </Grid>

                <Grid item xs={12}>

                </Grid>
                <Grid item xs={12}>

                    <Grid item >
                        <Button style={{
                            borderRadius: 35,
                            backgroundColor: "#21b6ae",
                            padding: "18px 36px",
                            fontSize: "18px"
                        }}
                            size="large"
                            variant="contained"
                            onClick={onClickHandlerHome}>
                            Home
                        </Button>
                    </Grid>
                </Grid>
            </Grid >
        </AppFrame>

    )
}

export default CityPage
