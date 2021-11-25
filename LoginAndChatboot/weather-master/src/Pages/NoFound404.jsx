import React from 'react'
import AppFrame from './../components/AppFrame'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import { Link as RouterLink } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import { IconContext } from 'react-icons'
import { WiRain } from "react-icons/wi"
const NoFound404 = props => {
    return (
        <AppFrame>
            <Grid container
                direction="column"
                justify="center"
                className="fullScreen">
                <div className="highlight">
                    <Grid item container xs={12}
                        justify="center"
                        alignItems="center">
                        <Grid item>
                            <IconContext.Provider value={{ size: "6em" }}>
                                <WiRain />
                            </IconContext.Provider>
                        </Grid>
                        <Grid item
                            container
                            direction="column"
                            justify="center"
                            alignItems="center">
                            <Typography variant="h4" color="inherit" >
                                404 No Found
                            </Typography>
                            <Link color="inherit"
                                aria-label="menu"
                                component={RouterLink}
                                to="/main">
                                Ingresar
                             </Link>
                        </Grid>
                    </Grid>
                </div>
            </Grid>
        </AppFrame>
    )
}

export default NoFound404
