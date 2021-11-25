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
                el: useRefDiv.current,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                backgroundColor: 0x50414,
                points: 20.00,
                maxDistance: 21.00,
                spacing: 13.00
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
