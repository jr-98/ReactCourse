import React from 'react'
import CityList from './CityList'

const citiess = [
    { city: "Pekin", country: "China" },
    { city: "Shangai", country: "China" },
    { city: "Buenos Aires", country: "Argentina" },
    { city: "Loja", country: "Ecuador" },
]
export default {
    title: 'CityList',
    component: CityList,
}
export const CityListExample = () => <CityList cities={citiess} /> 