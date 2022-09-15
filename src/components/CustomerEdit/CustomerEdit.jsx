import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router'
import AppFrame from '../AppFrame'
import { selectCustomerById } from '../../selectors/customers'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

const CustomerEdit = ({ customers }) => {
    const { id } = useParams();
    const { name, dni, age } = selectCustomerById(customers, id);
    const [stateForm, setStateForm] = useState({ name: name, dni: dni, age: age })

    function handleChange(evt) {
        const { value, name } = evt.target
        // value.preventDefault()
        /*
          Este snippet:
          1. Clona el estado actual
          2. Reemplaza solo el valor del
             input que ejecutó el evento
        */
        const newValues = {
            ...stateForm,
            [name]: value,
        };
        // Sincroniza el estado de nuevo
        setStateForm(newValues);
    };

    console.log(stateForm)
    return (
        <AppFrame
            header={name}
            body={
                <>
                    <h2>Edicion del Cliente</h2>
                    <form action='' className='customer-form' >
                        <div>
                            <label htmlFor='name'>Nombre</label>
                            <input
                                id='nameCustomer'
                                name='name'
                                type="text"
                                value={stateForm.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor='dni'>DNI</label>
                            <input
                                id='dniCustomer'
                                name='dni'
                                type="text"
                                value={stateForm.dni}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor='age'>Edad</label>
                            <input
                                id='ageCustomer'
                                name='age'
                                type="number"
                                value={stateForm.age}
                                onChange={handleChange}
                            />
                        </div>
                    </form>
                </>
            } />
    )
}


CustomerEdit.propTypes = {
    name: PropTypes.string,
    dni: PropTypes.string,
    age: PropTypes.string,
    customers: PropTypes.object,
}
const mapStateToProps = (state) => ({
    customers: state,
})
const CustomerEditForm = reduxForm({ form: 'CustomerEdit', enableReinitialize: true })(CustomerEdit);
export default connect(mapStateToProps)(CustomerEditForm);