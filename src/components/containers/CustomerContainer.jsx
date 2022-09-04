import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AppFrame from '../AppFrame'
import CustomerActions from '../CustomerActions'
import CustomersList from '../CustomerList'
import { fetchCustomer } from '../../actions/fetchCustomer';
import { Link } from 'react-router-dom';

const customers = [
    {
        "dni": '27000000',
        "name": 'Juan Perez',
        "age": 37
    },
    {
        "dni": '1104316548',
        "name": 'Evelyn Alexandra',
        "age": 24
    },
    {
        "dni": '3209320932',
        "name": 'Bambestre Rosalia',
        "age": 34
    },
    {
        "dni": '3209343442',
        "name": 'Totis del Carmen ',
        "age": 34
    },

];

class CustomerContainer extends Component {
    componentDidMount() {
        this.props.fetchCustomer()
    }

    renderBody = customers => (
        <>
            <CustomersList
                customers={customers && customers}
                urlPath={'customers/'} />
            <CustomerActions >
                <button>
                    <Link to='/customers/new' style={{ textDecoration: 'none' }} >Nuevo cliente</Link>
                </button>
            </CustomerActions>
        </>
    )
    render() {
        return (
            <AppFrame
                header='Listado de clientes'
                body={this.renderBody(customers)} >
            </AppFrame>
        )
    }

}
CustomerContainer.protoTypes = {
    fetchCustomer: PropTypes.func.isRequired
}
const mapDispatchToProps = { fetchCustomer }

export default connect(null, mapDispatchToProps)(CustomerContainer)