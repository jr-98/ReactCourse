import React from 'react'
import { Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid'
import AppFrame from './../components/AppFrame'
const CityPage = props => {
    const city = "Madrid"
    const country = "España"
    const state = "ThunderStorm"
    const temperature = 10
    const humidity = 80
    const wind = 5
    const data = [
        {
            "dayHour": "Jue 18",
            "min": 14,
            "max": 22,
        },
        {
            "dayHour": "Vie 06",
            "min": 18,
            "max": 27,
        },
        {
            "dayHour": "Vie 12",
            "min": 18,
            "max": 28,
        },
        {
            "dayHour": "Vie 18",
            "min": 18,
            "max": 25,
        },
        {
            "dayHour": "Sab 06",
            "min": 15,
            "max": 22,
        },
        {
            "dayHour": "Sab 12",
            "min": 12,
            "max": 19,
        }
    ]
    const forecastList = [
        { hour: 12, state: "Sunny", temperature: 32, weekDay: "Lunes" },
        { hour: 15, state: "Cloud", temperature: 18, weekDay: "Martes" },
        { hour: 14, state: "Windy", temperature: 15, weekDay: "Miercoles" },
        { hour: 3, state: "Snow", temperature: 3, weekDay: "Jueves" },
        { hour: 10, state: "Rain", temperature: 11, weekDay: "Viernes" },
        { hour: 8, state: "ThunderStorm", temperature: 9, weekDay: "Sábado" },
        { hour: 16, state: "Fog", temperature: 17, weekDay: "Domingo" },
    ]
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
                        <Link to="/main">Ir a main</Link>
                    </Grid>
                </Grid>
            </Grid >
        </AppFrame>

    )
}

export default CityPage
