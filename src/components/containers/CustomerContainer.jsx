import React, { Component, useEffect } from 'react';
import { connect } from 'react-redux';
import { useLocation, Route, Router, Routes, useNavigate, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppFrame from '../AppFrame';
import { fetchCustomer } from '../../actions/fetchCustomer'
import { selectCustomerById } from '../../selectors/customers';
import CustomerEdit from '../CustomerEdit/CustomerEdit';
import CustomersData from '../CustomersData/CustomersData';

class CustomerContainer extends Component {
    renderBody = () => {
        const location = window.location.href.split('/')
        const locationLength = location.length
        const url = location[locationLength - 1]

        if (url === 'edit') {
            return <CustomerEdit />
        } else {
            <CustomersData />
        }

        // const location = useLocation()
        // console.log(location)
        // <Router>
        //     <Routes>

        /* <Route path='/:id' element={<CustomersData />} />
        <Route path='/:id/edit' element={<CustomerEdit />} />
        {/* { */

        //             ({match}) => {

        //                     }
        //                 }
        //  */}

        //         </Route>
        //     </Routes>
        // </Router>




        // const { id } = useParams();
        // se obtinene los paramtros que se pasan en el link\ 
        // const { dni, name, age } = selectCustomerById(customers, id)
        // const navigate = useNavigate()
        // const onBack = () => {
        //     navigate('/customers')
        // }
        return <></>
    }

    render() {
        return (
            <div>
                <AppFrame header={`Cliente${this.props.dni}`}
                    body={

                        this.renderBody()
                        // <>
                        // <div>
                        //         <h3>Identidicacion: {dni}</h3>
                        //         <h3>Nombre: {name} </h3>
                        //         <h3>Edad: {age} </h3>
                        //     </div>
                        //     <div className='container-button'>
                        //         <div className='back-button'>
                        //             <button onClick={onBack}>
                        //                 Atras
                        //             </button>
                        //         </div>
                        //     </div>
                        // </>
                    }>
                </AppFrame >
            </div >
        )
    }
}

CustomerContainer.propTypes = {
    customers: PropTypes.object.isRequired,
    fetchCustomer: PropTypes.func.isRequired
}
//Filatrado que me obtiene del estado clientes, el objeto cuta clave sea igual al dni proporsionado en el props 
const mapStateToProps = (state) => ({
    customers: state
})

export default connect(mapStateToProps, {
    fetchCustomer
})(CustomerContainer)