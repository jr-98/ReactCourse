import React from 'react'
import AppFrame from '../AppFrame'
import CustomerEdit from '../CustomerEdit/CustomerEdit'

const NewCustomerContainer = () => {
    const renderBody = () => {
        <p>Custromers Edit</p>
        // return <CustomerEdit />
    }
    return (
        <AppFrame header='Nuevo cliente'
            body={
                renderBody()
            } />
    )
}
export default NewCustomerContainer
