import React from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router'
import AppFrame from '../AppFrame'
import { selectCustomerById } from '../../selectors/customers'
import { connect } from 'react-redux'

const CustomerEdit = ({ customers }) => {
    const { id } = useParams();
    const { name, dni, age } = selectCustomerById(customers, id);
    return (
        <AppFrame
            header='Edición de cliente'
            body={
                <>
                    <h2>Edicion del Cliente</h2>
                    <h3>Nombre: {name} Dni:{dni} Ege:{age}</h3>
                </>
            }>

        </AppFrame>
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
export default connect(mapStateToProps, null)(CustomerEdit)