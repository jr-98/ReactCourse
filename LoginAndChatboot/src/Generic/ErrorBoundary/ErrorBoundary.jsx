import { Button } from '@material-ui/core'
import React, { Component } from 'react'

class ErrorBoundary extends Component {
    constructor(props) {
        super(props)

        this.state = {
            activo: false
        }
    }
    estaActivo = () => {
        // return this.props.activo ? "Activo" : "No activo"
        return this.state.activo ? "Activo" : "No activo"
    }
    onClickHandler = () => {
        this.setState({ activo: true })
    }
    componentDidMount() {
        console.log("El componente de ha montado")
    }
    componentDidUpdate(prevProps, prevState) {
        console.log("eSTADI PREVIO", prevState.activo)
        console.log("Estodo actualizado", this.state.activo)
        console.log("El compoennte se ha actualizado")

    }
    componentWillUnmount() {
        console.log("El compoenente se ha desmontado")
    }

    render() {
        return (
            <div>
                <Button onClick={this.onClickHandler}>
                    Activar</Button>
                <h1 >
                    ErrorBoundary {this.props.saludo}
                    {
                        this.estaActivo()
                    }
                </h1 >
            </div>

        )
    }
}
export default ErrorBoundary

