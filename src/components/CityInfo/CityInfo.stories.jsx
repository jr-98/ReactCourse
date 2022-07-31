import React from 'react'
import 'typeface-roboto'
import CityInfo from './CityInfo'

const city = 'Buenos Aires'
const country = 'Argentina'
export default {
    title: "CityInfo",
    component: CityInfo
}
export const CityExample = () => <CityInfo city={city} country={country}></CityInfo>
