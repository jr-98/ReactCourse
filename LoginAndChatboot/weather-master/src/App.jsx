import React from 'react'
import MainPage from './Pages/MainPage'
import WelcomePage from './Pages/WelcomePage'
import Chatboot from './Pages/Chatboot'
import NoFound404 from './Pages/NoFound404'
import {
    BrowserRouter as Router,
    Switch, Route
} from 'react-router-dom'
const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <WelcomePage />
                </Route>
                <Route path="/main">
                    <MainPage />
                </Route>
                <Route path="/chat">
                    <Chatboot />
                </Route>
                <Route>
                    <NoFound404 />
                </Route>
            </Switch>
        </Router>
    )
}

export default App
