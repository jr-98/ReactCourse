import { render, fireEvent } from '@testing-library/react'
import React from 'react'
import CityList from './CityList'

const cities = [
    { city: "Pekin", country: "China" },
    { city: "Shangai", country: "China" },
    { city: "Buenos Aires", country: "Argentina" },
]
test('City List Renders', async () => {
    //eslint-disable-next-line
    const { findAllByRole } = render(<CityList cities={cities} />)
    //eslint-disable-next-line
    const cityList = await findAllByRole("button")

    expect(cityList).toHaveLength(3)
})

test("CityList click on item", async () => {
    //Debemos simular el click del usuario en un item de la lista
    //Para ello usamos una funcion mook
    const fnClickOnItem = jest.fn()

    const { findAllByRole } = render(<CityList cities={cities} onClickCity={fnClickOnItem} />)
    //eslint-disable-next-line
    const items = await findAllByRole("button")
    // especificamos que la funcion que se pasa como parametro de la funcion se ejecute una unica vez
    fireEvent.click(items[0])
    expect(fnClickOnItem).toHaveBeenCalledTimes(1)
})