import React, { FC } from 'react'
import './../../App.css'
//Se saca ProTypes ya qye Ts hace lo mismo de forma estatica
// Se define un tipo customixado de datos que Result lo utilizara 
type Props = {
    value: String
}
//<>Genirc
const Result: FC<Props> = ({ value }) => (// se debe tratar de evitar tipoANU 
    <div className="result">
        <span>{value}</span>
    </div>
)

Result.defaultProps = {
    value: '0'
}
export default Result