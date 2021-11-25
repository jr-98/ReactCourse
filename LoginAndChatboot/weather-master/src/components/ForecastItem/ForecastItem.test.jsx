import React from 'react'
import { render } from '@testing-library/react'
import ForecastItem from './ForecastItem'
//import { validValues } from './../IconState'
test('ForecastItem render', async () => {
    const { findByText } = render(
        <ForecastItem
            hour={10} state="clear"
            temperature={23} weekDay="Lunes" />)
    const hour = await findByText(/10/)
    //const state = await findAll(/Sunny/)
    const temperature = await findByText(/23/)
    const weekDay = await findByText(/Lunes/)

    expect(hour).toHaveTextContent("10")
    //expect(state).toHaveTextContent("Sunny")
    expect(temperature).toHaveTextContent("23")
    expect(weekDay).toHaveTextContent("Lunes")
})