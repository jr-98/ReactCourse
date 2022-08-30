import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import AppFrame from '../AppFrame'
import CustomerActions from '../CustomerActions'
//Componente conectado

class HomeContainer extends Component {
    handleOnclick = () => {
        console.log('Hice click en el boton ')
    }
    render() {
        return (

            <AppFrame
                header='Home'
                body={
                    <div style={{ paddingTop: '10px' }}>
                        Esta es la pantalla inicial
                        <CustomerActions>
                            <button onClick={this.handleOnclick}>Listado de clientes</button>
                            <Link to='/customers'></Link>
                        </CustomerActions>
                    </ div>
                }
            />
        )
    }
}

HomeContainer.propTypes = {}

export default HomeContainer
