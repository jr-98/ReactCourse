import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useParams, useNavigate } from 'react-router';
import { selectCustomerById } from '../../selectors/customers';
import AppFrame from '../AppFrame';

const CustomersData = ({ customers }) => {
    const { id } = useParams();
    const { name, dni, age } = selectCustomerById(customers, id);
    const navigate = useNavigate()
    const onBack = () => {
        navigate('/customers')
    }
    return (
        <AppFrame
            header='Datos del usuario'
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

        </AppFrame>
    )
}

CustomersData.propTypes = {
    name: PropTypes.string,
    dni: PropTypes.string,
    age: PropTypes.number,
    customers: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
    customers: state
})
export default connect(mapStateToProps, null)(CustomersData)