import React, { FC } from 'react'
import './Button.css';
//void: se espicifica que la funcion no retorna nada
export type ButtomClickHandler = (text: string) => void

//?: esta propiedad puede llegar como undefined ademas del tipo asignado, equivalenbte al no required de Proptypes
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
// Button.propTypes = {
//     text: PropTypes.string.isRequired,
//     type: PropTypes.string,
//     clickHandler: PropTypes.func.isRequired
// }
export default Button