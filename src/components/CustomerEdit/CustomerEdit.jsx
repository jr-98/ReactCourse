import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { useNavigate } from 'react-router'
import { fetchCustomer } from '../../actions/fetchCustomer'
import { updateCustomer } from '../../actions/updateCustomers'
import { insertCustomer } from '../../actions/insertCustomer'

const CustomerEdit = ({ customers = [{ name: '', dni: '', age: '' }], fetchCustomer, updateCustomer, insertCustomer, submitting, location }) => {
    fetchCustomer()
    const rgxTxt = new RegExp(/^[a-zA-Z]/, 'i')
    const { name, dni, age } = customers && customers;
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

    function handleBlurTxt() {
        const hasError = !rgxTxt.test(name);
        console.log(hasError)
        setStateForm((stateForm) => ({ ...stateForm, nameError: hasError }));
    }
    function handleBlurNum({ value, stateName }) {
        const hasError = isNaN(Number(value))
        const newValues = {
            ...stateForm,
            [`${stateName}Error`]: hasError,
        };
        setStateForm(newValues);
    }
    const ErrorComponent = ({ error, msj }) => {
        return (<p
            id="nameErr"
            aria-live="assertive"
            style={{ display: error ? true : 'none', color: 'red' }} >
            {msj}
        </p>)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const values = {
            id: stateForm.dni,
            dni: stateForm.dni,
            name: stateForm.name,
            age: parseInt(stateForm.age),
        }
        console.log('estos son los valores', values)
        handleOnSubmitSuccess()
        return location === 'edit'
            ? updateCustomer(dni, values)
            : insertCustomer(values)
    }
    const handleOnSubmitSuccess = () => {
        const msjSucces = location === 'edit'
            ? 'Usuario editado exitsamente!'
            : location === 'new' ?
                'Usuario creado Exitosamente!' :
                "Operacion exitosa!"
        alert(msjSucces)
        onBack()
    }
    const navigate = useNavigate();
    const onBack = () => {
        navigate('/customers')
    }

    return (
        <>
            <h2>{location === 'edit' ? 'Edicion de edición' : 'Formulario ingreso'}</h2>
            <form
                className='customer-form'
                onSubmit={handleSubmit} >
                <div>
                    <label htmlFor='name'>Nombre</label>
                    <input
                        id='nameCustomer'
                        name='name'
                        type="text"
                        value={stateForm.name ? stateForm.name : name}
                        onChange={handleChange}
                        /* onChange para sincronizar el valor del campo */
                        onBlur={handleBlurTxt}
                        /* onBlur para sincronizar la validación del campo */
                        aria-errormessage="nameCustomerError"
                        aria-invalid={stateForm.nameError}
                    />
                    <ErrorComponent error={stateForm.nameError} msj='Ingrese solo valores alfanuméricos' />
                </div>
                <div>
                    <label htmlFor='dni'>DNI</label>
                    <input
                        id='dniCustomer'
                        name='dni'
                        type="text"
                        value={stateForm.dni ? stateForm.dni : dni}
                        onBlur={() => handleBlurNum({ value: stateForm.dni, stateName: "dni" })}
                        onChange={handleChange}
                        aria-errormessage={stateForm.dniError}
                    />
                    <ErrorComponent error={stateForm.dniError} msj='Ingrese solo valores numéricos' />
                </div>
                <div>
                    <label htmlFor='age'>Edad</label>
                    <input
                        id='ageCustomer'
                        name='age'
                        type="number"
                        min={0}
                        value={stateForm.age ? stateForm.age : age}
                        onChange={handleChange}
                        onBlur={() => handleBlurNum({ value: stateForm.age, stateName: "age" })}
                        aria-errormessage={stateForm.ageError}
                    />
                    <ErrorComponent value={stateForm.age} error={stateForm.ageError} msj='Ingrese solo valores numéricos' />
                </div>
                <div className='container-button'>
                    <div className='submit-from'>
                        <button
                            disabled={(!stateForm.nameError && !stateForm.dniError && !stateForm.ageError) || !submitting ? false : true}
                            type='submit'>
                            Continuar
                        </button>
                    </div>
                    <div className='back-button'>
                        <button onClick={onBack}>
                            Atras
                        </button>
                    </div>
                </div>
            </form>
        </>

    )
}


CustomerEdit.propTypes = {
    customers: PropTypes.object,
    fetchCustomer: PropTypes.func,
    updateCustomer: PropTypes.func,
    insertCustomer: PropTypes.func
}
const CustomerEditForm = reduxForm({ form: 'CustomerEdit', enableReinitialize: true })(CustomerEdit);

export default connect(null, {
    fetchCustomer,
    updateCustomer,
    insertCustomer,
})(CustomerEditForm);