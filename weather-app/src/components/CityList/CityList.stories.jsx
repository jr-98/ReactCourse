import React from 'react'
import CityList from './CityList'
import { action } from '@storybook/addon-actions'
const cities = [
    { city: "Mexico", country: "Mexico", countryCode: "MX" },
    { city: "Shangai", country: "China", countryCode: "CN" },
    { city: "Madrid", country: "España", countryCode: "ES" },
    { city: "Loja", country: "Ecuador", countryCode: "EC" },
]
export default {
    title: 'CityList',
    component: CityList,
}
export const CityListExample = () => <CityList cities={cities} onClickCity={action('Este es un click sobre el componente')} /> 