import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppFrame from '../AppFrame';
import { selectCustomerById } from '../../selectors/customers';

const CustomerContainer = ({ customers }) => {
    const { id } = useParams();
    // se obtinene los paramtros que se pasan en el link 
    const { dni, name, age } = selectCustomerById(customers, id)
    return (
        <div>
            <AppFrame header={`Cliente ${id}`}
                body={
                    <div>
                        <h3>Identidicacion: {dni}</h3>
                        <h3>Nombre: {name} </h3>
                        <h3>Edad: {age} </h3>
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