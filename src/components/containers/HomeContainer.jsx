import React from 'react'
import AppFrame from '../AppFrame'
import { useNavigate } from 'react-router-dom'
import CustomerActions from '../CustomerActions'
//Componente conectado
const HomeContainer = () => {
    const navigate = useNavigate();
    const handleOnclick = () => {
        navigate("/customers");
    }
    return (
        <AppFrame
            header='Administracion de Clientes'
            body={
                <div style={{ paddingTop: '10px' }}>
                    <CustomerActions>
                        <button onClick={handleOnclick}>Listado de clientes</button>
                    </CustomerActions>
                </ div>
            }
        />
    )
}


export default HomeContainer
