import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AppFrame from '../AppFrame'
import CustomerActions from '../CustomerActions'
import CustomersList from '../CustomerList'
import { fetchCustomer } from '../../actions/fetchCustomer';
import { Link } from 'react-router-dom';
import { getCustomers } from '../../selectors/customers';

class CustomersContainer extends Component {
    componentDidMount() {
        this.props.fetchCustomer()
    }
    renderBody = customers => (
        <>
            <CustomersList
                customers={customers && customers}
                urlPath={'/customers/'} />
            <CustomerActions >
                <button className='button type3'>
                    <Link to='/customers/new' style={{ textDecoration: 'none', zIndex: "6", position: 'relative' }} >Nuevo cliente</Link>
                </button>
            </CustomerActions>
        </>
    )
    render() {
        return (
            <AppFrame
                header='Listado de clientes'
                body={this.renderBody(this.props.customers)} >
            </AppFrame>
        )
    }

}
CustomersContainer.protoTypes = {
    fetchCustomer: PropTypes.func.isRequired,
    customers: PropTypes.array.isRequired,
}
CustomersContainer.defaultProps = {
    customers: []
};
const mapStateToProps = state => ({
    customers: getCustomers(state)
})

export default connect(mapStateToProps, { fetchCustomer })(CustomersContainer)