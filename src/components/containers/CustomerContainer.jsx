import React, { Component } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppFrame from '../AppFrame';

const CustomerContainer = ({ customers }) => {
    const { id } = useParams();
    const customer = customers.customers.find(c => c.dni === id)
    // se obtinene los paramtros que se pasan en el link 
    return (
        <div>
            <AppFrame header={`Cliente ${id}`}
                body={
                    <div>
                        <h3>Identidicacion: {id}</h3>
                        <h3>Nombre: {customer.name} </h3>
                        <h3>Edad: {customer.age} </h3>
                    </div>
                }>
            </AppFrame >
        </div>
    )
}

CustomerContainer.propTypes = {
    customers: PropTypes.object.isRequired
}
//Filatrado que me obtiene del estado clientes, el objeto cuta clave sea igual al dni proporsionado en el props 
const mapStateToProps = (state) => ({
    customers: state
})

export default connect(mapStateToProps, null)(CustomerContainer)