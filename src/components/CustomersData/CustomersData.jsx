import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';
import AppFrame from '../AppFrame';

const CustomersData = ({ customers = [{ name: '', dni: '', age: '' }] }) => {

    const { name, dni, age } = customers && customers;
    const navigate = useNavigate()
    const onBack = () => {
        navigate('/customers')
    }
    return (
        <AppFrame header={name}
            body={
                <>
                    <div className="customers-data">
                        <h2> Datos del cliente</h2>
                        <div><strong>Nombre:</strong><i>{name}</i></div>
                        <div><strong>DNI:</strong><i>{dni}</i></div>
                        <div><strong>Edad:</strong><i>{age}</i></div>
                    </div>
                    <div className='container-button'>
                        <div className='back-button'>
                            <button onClick={onBack}>
                                Atras
                            </button>
                        </div>
                    </div>
                </>
            }>

        </AppFrame >

    )
}

CustomersData.propTypes = {
    name: PropTypes.string,
    dni: PropTypes.string,
    age: PropTypes.number,
    customers: PropTypes.object.isRequired
}

export default CustomersData