import React from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router'
import AppFrame from '../AppFrame'
import { selectCustomerById } from '../../selectors/customers'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'

const CustomerEdit = ({ customers }) => {
    const { id } = useParams();
    const { name, dni, age } = selectCustomerById(customers, id);
    console.log(name, dni, age)

    const handleEdit = () => { }
    return (
        <AppFrame
            header={name}
            body={
                <>
                    <h2>Edicion del Cliente</h2>
                    <form action='' className='customer-form'>
                        <div>
                            <label htmlFor='name'>Nombre</label>
                            <Field
                                id='nameCustomer'
                                name='name'
                                component="input"
                                type="text"
                                placeholder={name}
                                onChange={handleEdit}
                                value={`${name}`} />
                        </div>
                        <div>
                            <label htmlFor='dni'>DNI</label>
                            <Field
                                id='dniCustomer'
                                name='dni'
                                component="input"
                                type="text"
                                placeholder={dni}
                                onChange={handleEdit}
                            />
                        </div>
                        <div>
                            <label htmlFor='age'>Edad</label>
                            <Field
                                id='ageCustomer'
                                name='age'
                                component="input"
                                type="number"
                                placeholder={age}
                                onChange={handleEdit}
                                onLoad={true}
                                value={1}
                            />

                        </div>
                    </form>
                </>
            }>

        </AppFrame >
    )
}

CustomerEdit.propTypes = {
    name: PropTypes.string,
    dni: PropTypes.string,
    age: PropTypes.string,
    customers: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
    customers: state
})

export default reduxForm({ form: 'CustomerEdit', enableReinitialize: true })(connect(mapStateToProps, null)(CustomerEdit))