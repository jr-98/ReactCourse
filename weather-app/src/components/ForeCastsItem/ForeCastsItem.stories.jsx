import React from 'react';
import ForeCastsItem from './ForeCastsItem';

export default {
    title: 'ForeCasts Item',
    component: ForeCastsItem
}
export const ForeCastExample = () => <ForeCastsItem weekDay='Lunes' hour={21} state={'sunny'} temperature={34} />