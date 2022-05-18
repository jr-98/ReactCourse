import React, { PureComponent } from 'react'

class ErrorBoundary extends PureComponent {
    //Creacion de estado sin useState, mediante constructtores
    constructor(props) {//pertmite tener propiedades y editarlas
        super(props) //pasa las propiedades al superConstructo de la clase heradad, Copmponetn
        this.state = { //State es la forma de qacceder a l estado que tien el compoente base
            hasError: false
        }
    }

    // es una fucnion que no tuien un acceso la instancia sino solamente a la clase (
    //no se pude usar this)
    static getDerivedStateFromError(error) { //internamente hace un setState con la infon de erorr en caso de existeir
        return { hasError: true }
    }
    componentDidCatch(error, errorInfo) {
        console.log('error', errorInfo)
    }
    render() {
        return (
            this.state.hasError ?
                (<h1>Hubo un error</h1>)
                :
                (this.props.children)
        )
    }
}
export default ErrorBoundary