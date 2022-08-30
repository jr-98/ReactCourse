import React from 'react'
import PropTypes from 'prop-types'

const CustomerEdit = ({ name, dni, age }) => {
    return (
        <div>
            <h2>Edicion del Cliente</h2>
            <h3>Nombre: {name} Dni:{dni} Ege:{age}</h3>
        </div>
    )
}

CustomerEdit.propTypes = {
    name: PropTypes.string.isRequired,
    dni: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired,
}

export default CustomerEdit``