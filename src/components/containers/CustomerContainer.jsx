import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCustomer } from '../../actions/fetchCustomer';
import { deleteCustomer } from 'actions/deleteCustomer';
import { selectCustomerById } from '../../selectors/customers';
import CustomerEdit from '../CustomerEdit/CustomerEdit';
import CustomersData from '../CustomersData/CustomersData';
import AppFrame from '../AppFrame';
class CustomerContainer extends Component {
    getLocation = () => {
        const location = window.location.href.split('/')
        const locationLength = location.length
        const url = location[locationLength - 1]
        const id = location[4]
        const customer = selectCustomerById(this.props.customers, id)
        return { url, customer }
    }
    onDelete = id => {
        this.props.deleteCustomer(id);
        alert('Cliente eliminado correctamente')
    }

    renderBody = () => {
        const { url, customer } = this.getLocation()
        if (url === 'edit') {
            return <CustomerEdit customers={customer} location='edit' />
        } else if (url === 'delete') {
            return <CustomersData customers={customer} isDeleteAllow={true} onDelete={this.onDelete} />
        } else {
            return <CustomersData customers={customer} />
        }
    }
    renderHeader = () => {
        const { url, customer } = this.getLocation()
        const header = url === 'edit' ? 'Edicion de cliente' : `${customer.name}`
        return header
    }
    render() {
        return (
            <AppFrame
                header={this.renderHeader()}
                body={this.renderBody()}
            >
            </AppFrame>

        )
    }
}

CustomerContainer.propTypes = {
    customers: PropTypes.object.isRequired,
    fetchCustomer: PropTypes.func.isRequired,
    deleteCustomer: PropTypes.func
}
//Filatrado que me obtiene del estado clientes, el objeto cuta clave sea igual al dni proporsionado en el props 
const mapStateToProps = (state) => ({
    customers: state
})

export default connect(mapStateToProps, {
    fetchCustomer,
    deleteCustomer
})(CustomerContainer)