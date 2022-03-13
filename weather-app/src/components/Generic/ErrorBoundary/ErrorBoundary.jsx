import React, { Component } from 'react'

class ErrorBoundary extends Component {
    //Creacion de estado sin useState, mediante constructtores
    constructor(props) {//pertmite tener propiedades y editarlas
        super(props) //pasa las propiedades al superConstructo de la clase heradad, Copmponetn
        this.state = { //State es la forma de qacceder a l estado que tien el compoente base
            activo: false
        }
    }
    //Fin useState
    isActive = () => {
        // return this.props.activo ? ' Activo' : ' No Activo'
        return this.state.activo ? ' Activo' : ' No Activo'
    }
    onClickHandle = (props) => {
        //setState
        // this.state.activo=true //forma incorrecta
        if (this.state.activo === false) {
            this.setState({ activo: true })
        } else {
            this.setState({ activo: false })
        }

    }
    //Se ejecuta cuando el componente que usa el contructor ha sido invocado
    componentDidMount() {
        console.log('El componente se ha montado')
    }
    //se ejevuta cuando el componente se actualiza
    componentDidUpdate(prevProps, prevState) {
        console.log('Se ha modificado el estado')
        console.log('Estado anterior', prevState.activo)
        console.log('Estado actual', this.state.activo);
    }
    //Se utiliza cuando se desmonta el componente (momento previo a su desmontaje)
    componentWillUnmount() {
        console.log('El componente ha sido desmontado');
    }
    render() {
        return (
            <div>
                <booton onClick={this.onClickHandle}>{this.state.activo ? 'Desactivar' : 'Activar'}</booton>
                <h1>
                    {this.props.saludo}
                    {
                        this.isActive()
                    }
                </h1>
            </div>

        )
    }
}
export default ErrorBoundary