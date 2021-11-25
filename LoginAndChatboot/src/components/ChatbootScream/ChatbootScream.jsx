import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Globe from 'vanta/dist/vanta.globe.min';
import * as THREE from 'three'

const ChatbootScream = ({ children }) => {
    const useRefDiv = useRef(null)
    const [vanta, setVanta] = useState(0)
    useEffect(() => {
        if (!vanta) {
            //inicislización del componente
            setVanta(Globe({
                THREE,
                el: useRefDiv.current,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                color: 0x2f68d7,
                size: 0.90
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

ChatbootScream.propTypes = {
    children: PropTypes.node
}

export default ChatbootScream
