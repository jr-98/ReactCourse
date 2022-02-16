import { render } from '@testing-library/react'
import React from 'react'
import CityList from './CityList'

const cities = [
    { city: "Pekin", country: "China" },
    { city: "Shangai", country: "China" },
    { city: "Buenos Aires", country: "Argentina" },
]
test('City List Renders', async () => {
    const { findAllByRole } = render(<CityList cities={cities} />)
    //eslint-disable-next-line
    const cityList = await findAllByRole("listitem")

    expect(cityList).toHaveLength(3)
})