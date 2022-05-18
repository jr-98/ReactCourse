import React, { useReducer, useCallback } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import MainPage from './pages/MainPage';
import CityPage from './pages/CityPage';
import NoFoundPage from './pages/NoFoundPage';
//Se creaun una variable externa que no se ve afectada por la renderizacion de los componentes
const initialValue = {
    allWeather: {},
    allChartData: {},
    allForecastItem: {}
}
const App = () => {
    // action {type:'xxx', payload: xxx}
    const reducer = useCallback((state, action) => {
        switch (action.type) {
            case 'SET_ALL_WEATHER':
                const weatherCity = action.payload
                const newAllWeather = { ...state.allWeather, ...weatherCity }
                return { ...state, allWeather: newAllWeather }
            case 'SET_FORECAST_ITEM_LIST':
                const forecastItemListCity = action.payload
                const newAllForecastItemList = { ...state.forecastItemList, ...forecastItemListCity }
                return { ...state, forecastItemList: newAllForecastItemList }
            case 'SET_CHART_DATA':
                const charDataCity = action.payload
                const newAllChartData = { ...state.allChartData, ...charDataCity }
                return { ...state, allChartData: newAllChartData }
            default:
                return state
        }
    }, [])
    //Single Source of Truth (punto unico de control) 
    const [state, dispatch] = useReducer(reducer, initialValue)
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <WelcomePage />
                </Route>
                <Route path="/main">
                    <MainPage data={state} actions={dispatch} />
                </Route>
                <Route path="/city/:city/:countryCode">
                    <CityPage data={state} actions={dispatch} />
                    ``                </Route>
                <Route>
                    <NoFoundPage />
                </Route>
            </Switch>
        </Router>
    )
}

App.propTypes = {}

export default App