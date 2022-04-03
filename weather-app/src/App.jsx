import React, { useMemo, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import MainPage from './pages/MainPage';
import CityPage from './pages/CityPage';
import NoFoundPage from './pages/NoFoundPage';

const App = () => {
    const [allWeather, setAllWeather] = useState({})
    const onSetAllWeather = useMemo(() => ((weatherCity) => {
        setAllWeather(allWeather => {
            return ({ ...allWeather, ...weatherCity })
        })
    }), [setAllWeather])
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <WelcomePage />
                </Route>
                <Route path="/main">
                    <MainPage allWeather={allWeather} onSetAllWeather={onSetAllWeather} />
                </Route>
                <Route path="/city/:city/:countryCode">
                    <CityPage allWeather={allWeather} onSetAllWeather={onSetAllWeather} />
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