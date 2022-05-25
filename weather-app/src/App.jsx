import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import MainPage from './pages/MainPage';
import CityPage from './pages/CityPage';
import NoFoundPage from './pages/NoFoundPage';
import { WeatherContext } from './WeatherContext';// import { WeatherStateContext, WeatherDispatchContext } from './WeatherStateContext';

const App = () => {
    return (
        <WeatherContext>
            {/* <WeatherDispatchContext.Provider value={dispatch}>
            <WeatherStateContext.Provider value={state}> */}
            <Router>
                <Switch>
                    <Route exact path="/">
                        <WelcomePage />
                    </Route>
                    <Route path="/main">
                        <MainPage />
                    </Route>
                    <Route path="/city/:city/:countryCode">
                        <CityPage />
                    </Route>
                    <Route>
                        <NoFoundPage />
                    </Route>
                </Switch>
            </Router>
            {/* </WeatherStateContext.Provider>
        </WeatherDispatchContext.Provider> */}
        </WeatherContext >
    )
}

App.propTypes = {}

export default App