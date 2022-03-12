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
        state: 'Clear',
        temperature: 34,
    },
    {
        weekDay: 'Martes',
        hour: 15,
        state: "Clouds",
        temperature: 10,
    },
    {
        weekDay: 'Miercoles',
        hour: 6,
        state: 'Rain',
        temperature: 5,
    },
    {
        weekDay: 'Jueves',
        hour: 14,
        state: 'Snow',
        temperature: 3,
    },
    {
        weekDay: 'Viernes',
        hour: 9,
        state: 'Drizzle',
        temperature: 12,
    },
    {
        weekDay: 'Sábado',
        hour: 20,
        state: 'Thunderstorm',
        temperature: 8,
    },
    {
        weekDay: 'Domingo',
        hour: 20,
        state: 'Fog',
        temperature: 8,
    },
    {
        weekDay: 'Domingo',
        hour: 10,
        state: 'Tornado',
        temperature: 0,
    },
]
export const ForecastExample = () => <Forecast forecastItemList={list} />