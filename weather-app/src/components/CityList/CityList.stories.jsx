import React from 'react'
import CityList from './CityList'
import { action } from '@storybook/addon-actions'
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
export const CityListExample = () => <CityList cities={citiess} onClickCity={action('Este es un click sobre el componente')} /> 