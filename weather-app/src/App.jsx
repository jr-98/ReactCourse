import React, { useMemo, useState, useCallback } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import MainPage from './pages/MainPage';
import CityPage from './pages/CityPage';
import NoFoundPage from './pages/NoFoundPage';

const App = () => {
    const [allWeather, setAllWeather] = useState({})
    const [allChartData, setAllChartData] = useState({})
    const [allForecastItem, setAllForecastItem] = useState({})
    
    const onSetAllWeather = useCallback((weatherCity) => {
        setAllWeather(allWeather => {
            return ({ ...allWeather, ...weatherCity })
        })
    }, [setAllWeather])

    const onSetChartData = useCallback((charDataCity) => {
        setAllChartData(allChartData => ({ ...allChartData, ...charDataCity }))
    }, [setAllChartData])

    const onSetForecastItem = useCallback((forecastItemListCity) => {
        setAllForecastItem(forecastItemList => ({ ...forecastItemList, ...forecastItemListCity }))
    }, [setAllForecastItem])

    const actions = useMemo(() => (
        {
            onSetAllWeather,
            onSetChartData,
            onSetForecastItem
        }
    ), [onSetAllWeather, onSetChartData, onSetForecastItem])
    const data = useMemo(() => (
        {
            allWeather,
            allChartData,
            allForecastItem
        }
    ), [allWeather, allChartData, allForecastItem])
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <WelcomePage />
                </Route>
                <Route path="/main">
                    <MainPage data={data} actions={actions} />
                </Route>
                <Route path="/city/:city/:countryCode">
                    <CityPage data={data} actions={actions} />
                </Route>
                <Route>
                    <NoFoundPage />
                </Route>
            </Switch>
        </Router>
    )
}

App.propTypes = {}

export default App