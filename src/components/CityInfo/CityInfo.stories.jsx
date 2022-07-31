import React from 'react'
import 'typeface-roboto'
import CityInfo from './CityInfo'

const city = 'Buenos Aires'
const country = 'Argentina'
export default {
    title: "CityInfo",
    component: CityInfo
}
export const CityExample = (args) => (<CityInfo {...args}></CityInfo>)
CityExample.args = { city: city, country: country }
