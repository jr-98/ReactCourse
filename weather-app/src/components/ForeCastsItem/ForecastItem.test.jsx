import { render } from '@testing-library/react';
import React from 'react';
import ForeCastsItem from './ForecastItem';

test('ForecastItem render', async () => {
    const { findByText, findAllByRole } = render(<ForeCastsItem weekDay='Lunes' hour={21} state={'sunny'} temperature={34} />)

    const dayWeek = 'Lunes'

    //eslint-disable-next-line
    const forecastItemDay = await findAllByRole('heading')
    //eslint-disable-next-line
    const hour = await findByText(/21/)
    //eslint-disable-next-line
    const temperature = await findByText(/34/)

    expect(forecastItemDay[0]).toHaveTextContent(dayWeek)
    expect(hour).toHaveTextContent(21)
    expect(temperature).toHaveTextContent(34)
})