import React, { FC } from 'react'
import './Button.css';
//void: se espicifica que la funcion no retorna nada
export type ButtomClickHandler = (text: string) => void
//?: Esta propiedad puede llegar como undefined ademas, del tipo asignado, equivale al no required de Proptypes
type Props = {
    text: string,
    type?: string,
    clickHandler: ButtomClickHandler//arbold etipos
}

const Button: FC<Props> = ({ text, type, clickHandler }) => (
    <button className={type} onClick={() => clickHandler(text)}>
        <span>{text}</span>
    </button>
)

export default Button