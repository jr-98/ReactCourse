import React from 'react';
import Button from '../button/Button';
import PropTypes from 'prop-types';
import './../../App.css'

const MathOperations = ({ onClickOperation, onClickEqual }) => (
    <section className="math-operations">
        <Button text='+' type='math-operations' clickHandler={onClickOperation}></Button>
        <Button text='-' type='math-operations' clickHandler={onClickOperation}></Button>
        <Button text='*' type='math-operations' clickHandler={onClickOperation}></Button>
        <Button text='/' type='math-operations' clickHandler={onClickOperation}></Button>
        <Button text='=' type='math-operations' clickHandler={onClickEqual}></Button>
    </section>
)
MathOperations.propTypes = {
    onClickEqual: PropTypes.func.isRequired,
    onClickOperation: PropTypes.func.isRequired
}
export default MathOperations