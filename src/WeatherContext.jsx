import React, { createContext, useContext, useReducer } from "react"

const WeatherStateContext = createContext()
const WeatherDispatchContext = createContext()

//Se creaun una variable externa que no se ve afectada por la renderizacion de los componentes
const initialValue = {
    allWeather: {},
    allChartData: {},
    allForecastItem: {}
}
// action {type:'xxx', payload: xxx}
const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_ALL_WEATHER':
            const weatherCity = action.payload
            const newAllWeather = { ...state.allWeather, ...weatherCity }
            return { ...state, allWeather: newAllWeather }
        case 'SET_FORECAST_ITEM_LIST':
            const forecastItemListCity = action.payload
            const newAllForecastItemList = { ...state.forecastItemList, ...forecastItemListCity }
            return { ...state, forecastItemList: newAllForecastItemList }
        case 'SET_CHART_DATA':
            const charDataCity = action.payload
            const newAllChartData = { ...state.allChartData, ...charDataCity }
            return { ...state, allChartData: newAllChartData }
        default:
            return state
    }
}
//Single Source of Truth (punto unico de control) 
const WeatherContext = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialValue)
    return (
        <WeatherDispatchContext.Provider value={dispatch} >
            <WeatherStateContext.Provider value={state}>
                {children}
            </WeatherStateContext.Provider>
        </WeatherDispatchContext.Provider>
    )
}

const useWeatherStateContext = () => {
    const state = useContext(WeatherStateContext)
    if (!state) {
        throw Error('Must set state provider')
    }
    return state
}
const useWeatherDispatchContext = () => {
    const dispatch = useContext(WeatherDispatchContext)
    if (!dispatch) {
        throw Error('Must set dispatch provider')
    }
    return dispatch
}
export {
    useWeatherStateContext,
    useWeatherDispatchContext,
    WeatherContext
}