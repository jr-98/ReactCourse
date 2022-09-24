import React from 'react'
import AppFrame from '../AppFrame'
import CustomerEdit from '../CustomerEdit/CustomerEdit'

const NewCustomerContainer = () => {

    return <AppFrame header='Ingreso de nuevo cliente'
        body={<CustomerEdit location={'new'} />}
    />
}
export default NewCustomerContainer
