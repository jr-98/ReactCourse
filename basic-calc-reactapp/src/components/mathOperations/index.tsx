import React, { FC } from 'react';
import Button, { ButtomClickHandler } from '../Button';
// import PropTypes from 'prop-types';
import './../../App.css'

type Props = {
    onClickOperation: ButtomClickHandler,
    onClickEqual: ButtomClickHandler
}
const MathOperations: FC<Props> = ({ onClickOperation, onClickEqual }) => (
    <section className="math-operations">
        <Button text='+' type='math-operations' clickHandler={onClickOperation}></Button>
        <Button text='-' type='math-operations' clickHandler={onClickOperation}></Button>
        <Button text='*' type='math-operations' clickHandler={onClickOperation}></Button>
        <Button text='/' type='math-operations' clickHandler={onClickOperation}></Button>
        <Button text='=' type='math-operations' clickHandler={onClickEqual}></Button>
    </section>
)
// MathOperations.propTypes = {
//     onClickEqual: PropTypes.func.isRequired,
//     onClickOperation: PropTypes.func.isRequired
// }
export default MathOperations