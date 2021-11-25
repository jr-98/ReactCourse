import React, { useRef, useEffect, useState } from 'react'
import AppFrame from '../components/AppFrame'
import Chatboot from '../components/Chatboot';
import ChatbootScream from '../components/ChatbootScream';
import { useHistory } from "react-router-dom";
import Grid from '@material-ui/core/Grid'
import { Button } from '@material-ui/core';


const CityPage = props => {

    const history = useHistory();
    const onClickHandlerHome = () => {
        history.push('./')
    }
    return (
        <AppFrame>
            <ChatbootScream>
                <Grid container
                    item
                    direction="column"
                    justify="center"
                    alignItems="center"
                    className="fullScreen">
                    <Grid item />
                    <Grid>
                        <Chatboot></Chatboot>
                    </Grid>


                    <Grid item>
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
                </Grid >
            </ChatbootScream>
        </AppFrame>

    )
}

export default CityPage
