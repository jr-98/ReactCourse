import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AppFrame from '../AppFrame';
import { fetchCustomer } from '../../actions/fetchCustomer'
import { selectCustomerById } from '../../selectors/customers';
import CustomerEdit from '../CustomerEdit/CustomerEdit';
import CustomersData from '../CustomersData/CustomersData';
class CustomerContainer extends Component {
    renderBody = () => {
        const location = window.location.href.split('/')
        const locationLength = location.length
        const url = location[locationLength - 1]
        const id = location[4]
        const customer = selectCustomerById(this.props.customers, id)

        // const customers = selectCustomerById()
        if (url === 'edit') {
            return <CustomerEdit />
        } else {
            return <CustomersData customers={customer} />
        }
    }

    render() {
        return (
            <div>
                <AppFrame header={`Cliente${this.props.dni}`}
                    body={
                        this.renderBody()
                    }>
                </AppFrame >
            </div >
        )
    }
}

CustomerContainer.propTypes = {
    customers: PropTypes.object.isRequired,
    fetchCustomer: PropTypes.func.isRequired
}
//Filatrado que me obtiene del estado clientes, el objeto cuta clave sea igual al dni proporsionado en el props 
const mapStateToProps = (state) => ({
    customers: state
})

export default connect(mapStateToProps, {
    fetchCustomer
})(CustomerContainer)