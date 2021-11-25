import React, { useRef, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Net from 'vanta/dist/vanta.net.min'
import * as THREE from 'three'

const WelcomeScreen = ({ children }) => {
    const useRefDiv = useRef(null)
    const [vanta, setVanta] = useState(0)
    useEffect(() => {
        if (!vanta) {
            //inicislización del componente
            setVanta(Net({
                THREE,
                el: useRefDiv.current
            }))
        }
        return () => {
            //vamos a ejecutar lo necesario para detener los efectos
            if (vanta) {
                vanta.destroy()
                console.log("componente destruido")
            }
        }
        //Al salir de la pantalla se debe detener el evento
        //para ello de debe desasoviar todos lso elementos asociados a ese componente
    }, [vanta])//Con esto me aseguro de que 
    //si tuviera más variables
    return (
        <div className="fullScreen" ref={useRefDiv}>
            {children}
        </div>
    )
}

WelcomeScreen.propTypes = {
    children: PropTypes.node
}

export default WelcomeScreen
