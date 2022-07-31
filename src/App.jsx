import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
                <Routes>
                    <Route path="/" element={<WelcomePage />} />
                    <Route path="/main*" element={<MainPage />} />
                    <Route path="/city/:city/:countryCode" element={<CityPage />} />
                    <Route path='*' element={<NoFoundPage />} />
                </Routes>
            </Router>
            {/* </WeatherStateContext.Provider>
        </WeatherDispatchContext.Provider> */}
        </WeatherContext >
    )
}

App.propTypes = {}

export default App