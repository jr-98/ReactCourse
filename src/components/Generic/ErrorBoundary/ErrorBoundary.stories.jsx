import React from 'react'
import ErrorBoundary from './ErrorBoundary'

export default {
    title: 'ErrorBoundary',
    component: ErrorBoundary
}
const Component1 = () => {
    return <h1>Sin error</h1>
}

const prop = undefined
const Component2 = () => <h1>{prop.hola}</h1>

export const componentWithOutError = () => {
    return (
        <ErrorBoundary>
            <Component1/>
        </ErrorBoundary>
    )
}
export const componentWitError = () => {
    return (
        <ErrorBoundary>
            <Component2 />
        </ErrorBoundary>
    )
}