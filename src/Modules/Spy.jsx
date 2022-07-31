import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import config from '../config';

ReactGA.initialize(config.googleAnalytics);

const Spy = () => {

    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    });

    return null

}
export default Spy;
