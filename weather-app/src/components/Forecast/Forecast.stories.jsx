import React from 'react';
import Forecast from './Forecast';

export default {
    title: 'Forecast',
    component: Forecast
}
const list = [
    {
        weekDay: 'Lunes',
        hour: 12,
        state: 'sunny',
        temperature: 34,
    },
    {
        weekDay: 'Martes',
        hour: 15,
        state: 'clouds',
        temperature: 10,
    },
    {
        weekDay: 'Miercoles',
        hour: 6,
        state: 'rain',
        temperature: 5,
    },
    {
        weekDay: 'Jueves',
        hour: 14,
        state: 'snow',
        temperature: 3,
    },
    {
        weekDay: 'Viernes',
        hour: 9,
        state: 'drizzle',
        temperature: 12,
    },
    {
        weekDay: 'Sábado',
        hour: 20,
        state: 'thunderstorm',
        temperature: 8,
    },
]
export const ForecastExample = () => <Forecast forecastItemList={list} />