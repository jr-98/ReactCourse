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
            header='Home'
            body={
                <div style={{ paddingTop: '10px' }}>
                    Esta es la pantalla inicial
                    <CustomerActions>
                        <button onClick={handleOnclick}>Listado de clientes</button>
                    </CustomerActions>
                </ div>
            }
        />
    )
}


export default HomeContainer
