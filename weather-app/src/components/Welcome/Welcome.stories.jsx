import React from 'react';
import Welcome from './Welcome';
import Weather from '../Weather';
export default {
    title: 'Welcome',
    component: Welcome
}
export const welcomeExample = () => {
    return (
        <Welcome>
            <Weather temperature={23} state='Clear' />
        </Welcome>
    )
}