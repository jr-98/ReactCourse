import React, { useRef, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import CLOUDS from 'vanta/dist/vanta.clouds.min'
import * as THREE from 'three'

const Welcome = ({ children }) => {
    const myRefDiv = useRef(null)
    const [vanta, setVanta] = useState(0) //INicializa en el valor 0 indicando que el elementio vanta no se ha renderizado
    console.log('Valor del estado = 0 ')
    useEffect(() => {
        if (!vanta) {
            console.log('Asinacion re recursos provistos por vanta')
            setVanta(CLOUDS({
                THREE,
                el: myRefDiv.current
            }))
        }
        //Es una variable que cambia constantemente, por lo que se debe acturalizar el estado de forma constante
        return () => {
            if (vanta) {
                vanta.destroy()
                console.log('resursos libera')
            }
        }
        //Si abandonamos la pantalla, el efecto provisto por vanta debe deternerce
        //La libereaciona de  recoursos se conoce como saneamiento de componentes
    }, [vanta])
    return (
        <div ref={myRefDiv}>
            Component
        </div>
    )
}

Welcome.propTypes = {
    children: PropTypes.node
}
export default Welcome