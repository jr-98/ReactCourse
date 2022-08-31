import React from 'react'
import AppFrame from '../AppFrame'
import CustomerActions from '../CustomerActions'
import CustomersList from '../CustomerList'

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
const handleAddNew = () => {

}
const CustomerContainer = () => {

    const renderBody = customers => (
        <>
            <CustomersList
                customers={customers && customers}
                urlPath={'customers/'} />
            <CustomerActions >
                <button onClick={handleAddNew}>Nuevo cliente</button>
            </CustomerActions>
        </>
    )

    return (
        <AppFrame
            header='Listado de clientes'
            body={renderBody(customers)}>
        </AppFrame>
    )
}

export default CustomerContainer