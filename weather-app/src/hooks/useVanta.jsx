import { useEffect, useState, useRef } from 'react'
import CLOUDS from 'vanta/dist/vanta.clouds.min'
import * as THREE from 'three'

const useVanta = () => {
    const myRefDiv = useRef(null)
    const [vanta, setVanta] = useState(0) //Inicializa en el valor 0 indicando que el elementio vanta no se ha renderizado
    useEffect(() => {
        if (!vanta) {
            setVanta(CLOUDS({
                THREE,
                el: myRefDiv.current
            }))
        }
        //35008ab12172c1849744d7ab7ef37472
        //Es una variable que cambia constantemente, por lo que se debe acturalizar el estado de forma constante
        return () => {
            if (vanta) {
                vanta.destroy()
            }
        }
        //Si abandonamos la pantalla, el efecto provisto por vanta debe deternerce
        //La libereaciona de  recoursos se conoce como saneamiento de componentes
    }, [vanta])

    return myRefDiv
}
export default useVanta
