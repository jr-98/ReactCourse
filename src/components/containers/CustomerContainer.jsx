import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import AppFrame from '../AppFrame'

class CustomerContainer extends Component {

    render() {
        return (
            <AppFrame header='Cliente'
                body={'Datos del cliente'}>
            </AppFrame>
        )
    }
}
export default connect(null, null)(CustomerContainer)