import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router'
import AppFrame from '../AppFrame'
import { selectCustomerById } from '../../selectors/customers'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

const CustomerEdit = ({ customers }) => {
    const rgxTxt = new RegExp(/^[a-zA-Z]/)
    const rgxNum = new RegExp(/^[0-9,$]*$/)
    const { id } = useParams();
    const { name, dni, age } = selectCustomerById(customers, id);
    const [stateForm, setStateForm] = useState({ name: name, dni: dni, age: age, nameError: false, dniError: false, ageError: false })

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
    function handleBlurTxtName() {
        const hasError = !rgxTxt.test(name);
        console.log(hasError)
        setStateForm({ ...stateForm, nameError: hasError });
    }
    function handleBlurTxtDni() {
        const hasError = !rgxNum.test(dni);
        setStateForm({ ...stateForm, dniError: hasError });
    }
    function handleBlurNum() {
        const hasError = !rgxNum.test(age);
        setStateForm((stateForm) => ({ ...stateForm, ageError: hasError }));
    }
    const ErrorComponent = ({ value, error, msj }) => {
        if (value.length === 0) {
            error = true
            msj = 'Este campo es requerido'
        }
        console.log(error, msj)
        return (<p
            id="nameErr"
            aria-live="assertive"
            style={{ display: error ? true : 'none', color: 'red' }} >
            {msj}
        </p>)
    }

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
                                /* onChange para sincronizar el valor del campo */
                                onBlur={handleBlurTxtName}
                                /* onBlur para sincronizar la validación del campo */
                                aria-errormessage="nameCustomerError"
                                aria-invalid={stateForm.nameError}
                            />
                            <ErrorComponent value={stateForm.name} error={stateForm.nameError} msj=' Ingrese solo valores alfanuméricos' />
                        </div>
                        <div>
                            <label htmlFor='dni'>DNI</label>
                            <input
                                id='dniCustomer'
                                name='dni'
                                type="text"
                                value={stateForm.dni}
                                onBlur={handleBlurTxtDni}
                                onChange={handleChange}
                                aria-errormessage={stateForm.dniError}
                            />
                            <ErrorComponent value={stateForm.dni} error={stateForm.dniError} msj='Ingrese solo valores numéricos' />
                        </div>
                        <div>
                            <label htmlFor='age'>Edad</label>
                            <input
                                id='ageCustomer'
                                name='age'
                                type="number"
                                value={stateForm.age}
                                onChange={handleChange}
                                onBlur={handleBlurNum}
                                aria-errormessage={stateForm.ageError}
                            />
                            <ErrorComponent value={stateForm.age} error={stateForm.ageError} msj='Ingrese solo valores numéricos' />
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