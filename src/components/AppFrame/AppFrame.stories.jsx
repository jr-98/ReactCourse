import React from 'react';
import AppFrame from './AppFrame';
import { BrowserRouter as Router } from 'react-router-dom';
import Weather from '../Weather/Weather';
export default {
    title: 'App Frame',
    component: AppFrame,
}
export const apFrameExample = () => {
    return (
        <Router>
            <AppFrame children={<Weather temperature={23} state='Clear' />}>
            </AppFrame>
        </Router>
    )
}