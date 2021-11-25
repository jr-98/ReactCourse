import React from 'react'
import AppFrame from './../components/AppFrame'
import WelcomeScreen from './../components/WelcomeScreen'
import Login from './../components/Login';
import Logout from '../components/Logout';
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid'
import { useAuth0 } from '@auth0/auth0-react';
import Typography from '@material-ui/core/Typography'
import { IconContext } from 'react-icons'
import { AiOutlineRobot } from "react-icons/ai"
import { useHistory } from 'react-router-dom';


const WelcomePage = props => {
    const history = useHistory()
    const onClickHandlerInfo = () => {
        //history.puas() nos permite comabiar las urls mediante cod
        history.push('/main')
    }
    const onClickHandlerChat = () => {
        //history.puas() nos permite comabiar las urls mediante cod
        history.push('/chat')
    }
    const { isAuthenticated } = useAuth0();
    return (
        <AppFrame>
            <WelcomeScreen>
                <Grid container
                    direction="column"
                    justify="center"
                    className="fullScreen">
                    <div className='containerLog'>
                        <Login></Login>
                        {isAuthenticated && (
                            <Logout />
                        )}
                    </div>
                    <div className="highlight">
                        <Grid item container xs={12}
                            justify="center"
                            alignItems="center">
                            <Grid item>
                                <IconContext.Provider value={{ size: "6em" }}>
                                    <AiOutlineRobot />
                                </IconContext.Provider>
                            </Grid>
                            <Grid item
                                container
                                direction="column"
                                justify="center"
                                alignItems="center">
                                <Typography variant="h4" color="inherit">
                                    ChatBoot
                                </Typography>

                                {isAuthenticated && (
                                    <div>
                                        <Button style={{
                                            borderRadius: 35,
                                            backgroundColor: "#d73d6c",
                                            padding: "18px 36px",
                                            fontSize: "18px"
                                        }}
                                            size="large"
                                            variant="contained"
                                            onClick={onClickHandlerInfo}>
                                            Informacion
                                        </Button>
                                        <Button size="large"
                                            style={{
                                                borderRadius: 35,
                                                backgroundColor: "#d73d6c",
                                                padding: "18px 36px",
                                                fontSize: "18px"
                                            }}
                                            variant="contained"
                                            onClick={onClickHandlerChat}>
                                            ChatBoot
                                        </Button>
                                    </div>
                                )}
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
            </WelcomeScreen>
        </AppFrame>
    )
}

export default WelcomePage
