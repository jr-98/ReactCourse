import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { useParams, useNavigate } from 'react-router'
import AppFrame from '../AppFrame'
import { selectCustomerById } from '../../selectors/customers'
import { fetchCustomer } from '../../actions/fetchCustomer'
import { updateCustomer } from '../../actions/updateCustomers'

const CustomerEdit = ({ customers, fetchCustomer, updateCustomer, submitting }) => {
    const rgxTxt = new RegExp(/^[a-zA-Z]/, 'i')
    const { id } = useParams();
    const { name, dni, age } = selectCustomerById(customers && customers, id && id);
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
    const ErrorComponent = ({ value, error, msj }) => {
        if (value.length === 0) {
            error = true
            msj = 'Este campo es requerido'
        }
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
        return updateCustomer(id, values)
    }
    const handleOnSubmitSuccess = () => {
        alert('Usuario editado exitsamente!')
        onBack()
    }
    const navigate = useNavigate();
    const onBack = () => {
        navigate('/customers')
    }
    useEffect(() => {
        fetchCustomer()
    }, [])
    return (
        <AppFrame
            header={name}
            body={
                <>
                    <h2>Edicion del Cliente</h2>
                    <form
                        className='customer-form'
                        onSubmit={handleSubmit} >
                        <div>
                            <label htmlFor='name'>Nombre</label>
                            <input
                                id='nameCustomer'
                                name='name'
                                type="text"
                                value={stateForm.name}
                                onChange={handleChange}
                                /* onChange para sincronizar el valor del campo */
                                onBlur={handleBlurTxt}
                                /* onBlur para sincronizar la validación del campo */
                                aria-errormessage="nameCustomerError"
                                aria-invalid={stateForm.nameError}
                            />
                            <ErrorComponent value={stateForm.name} error={stateForm.nameError} msj='Ingrese solo valores alfanuméricos' />
                        </div>
                        <div>
                            <label htmlFor='dni'>DNI</label>
                            <input
                                id='dniCustomer'
                                name='dni'
                                type="text"
                                value={stateForm.dni}
                                onBlur={() => handleBlurNum({ value: stateForm.dni, stateName: "dni" })}
                                onChange={handleChange}
                                aria-errormessage={stateForm.dniError}
                            />
                            <ErrorComponent value={stateForm} error={stateForm.dniError} msj='Ingrese solo valores numéricos' />
                        </div>
                        <div>
                            <label htmlFor='age'>Edad</label>
                            <input
                                id='ageCustomer'
                                name='age'
                                type="number"
                                min={0}
                                value={stateForm.age}
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
            } />
    )
}


CustomerEdit.propTypes = {
    name: PropTypes.string,
    dni: PropTypes.string,
    age: PropTypes.string,
    customers: PropTypes.object,
    fetchCustomer: PropTypes.func,
    updateCustomer: PropTypes.func
}
const mapStateToProps = (state) => ({
    customers: state,
})
const CustomerEditForm = reduxForm({ form: 'CustomerEdit', enableReinitialize: true })(CustomerEdit);

export default connect(mapStateToProps, {
    fetchCustomer,
    updateCustomer
})(CustomerEditForm);