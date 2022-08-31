import React from 'react'
import PropTypes from 'prop-types'
import AppHeader from '../AppHeader'

const AppFrame = ({ header, body }) => {
    return (
        <div className='app-frame'>
            <AppHeader title={header}></AppHeader>
            <div>{body}</div>
            <div className='footer-text'>Aplicación basica de react pensada para administrar lista de Clientes</div>
        </div>
    )
}

AppFrame.propTypes = {
    header: PropTypes.string.isRequired,
    body: PropTypes.element.isRequired,
}

export default AppFrame