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
        const { value } = evt.target

    }

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
                            {/* <Field
                                id='nameCustomer'
                                name='name'
                                component={renderField}
                                type="text"
                            // placeholder={name}
                            /> */}
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
                            {/* <Field
                                id='dniCustomer'
                                name='dni'
                                type="text"
                                component="input"
                            // placeholder={dni}
                            /> */}
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
                            {/* <Field
                                id='ageCustomer'
                                name='age'
                                type="number"
                                component="input"
                            // placeholder={age}
                            /> */}

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