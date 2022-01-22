import React from 'react'
import { render } from '@testing-library/react'
import CityInfo from './CityInfo' // SUT: Subject under test
test("CityInfo render", async () => {
    ///AAA
    ///Arrange
    ///Act
    const city = "Buenos Aires"
    const country = 'Argentina'
    const { findAllByRole } = render(<CityInfo city={city} country={country} />)
    const cityAndCountryComponent = await findAllByRole("heading")
    ///Acert
    expect(cityAndCountryComponent[0]).toHaveTextContent(city)
    expect(cityAndCountryComponent[1]).toHaveTextContent(country)
})