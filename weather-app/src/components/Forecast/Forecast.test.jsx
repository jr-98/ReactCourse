import { render } from '@testing-library/react';
import React from 'react';
import Forecast from './Forecast';

//findByTextId nos permite encontrar claves unicas en lso componmentes quue se entan renderizando
const lists = [
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
test('Forecast render', async () => {
    const { findAllByTestId } = render(<Forecast forecastItemList={lists} />)

    //eslint-deseable-next-line
    const forecastItem = await findAllByTestId('forecast-item-container')

    expect(forecastItem).toHaveLength(8)


})