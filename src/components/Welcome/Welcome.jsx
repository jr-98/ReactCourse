import React from 'react'
import PropTypes from 'prop-types'
import useVanta from '../../hooks/useVanta'
import '../../index.css'
import { Grid } from '@material-ui/core'

const Welcome = ({ children }) => {
    const myRefDiv  = useVanta()

    return (
        <Grid container
            ref={myRefDiv}
            alignItems='center'
            className='full-scream'
            display='flex'>
            {children}
        </Grid>

    )
}
Welcome.propTypes = {
    children: PropTypes.node
}
export default Welcome