import React from 'react';
import ForecastItem from './ForecastItem';

export default {
    title: 'ForeCasts Item',
    component: ForecastItem
}
export const ForecastExample = () => <ForecastItem weekDay='Lunes' hour={21} state={'sunny'} temperature={34} />