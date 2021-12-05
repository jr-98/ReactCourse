import React from 'react'
import Button from '../button/Button'
import PropTypes from 'prop-types'

const number = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
const renderButtons = onClickNumber => {
    return number.map(number => <Button key={number} text={number.toString()} clickHandler={onClickNumber} ></Button >)
}
const Numbers = ({ onClickNumber }) => {
    return (
        <section className="numbers">
            {renderButtons(onClickNumber)}
        </section>
    )
}
Numbers.propTypes = {
    onClickNumber: PropTypes.func.isRequired
}
export default Numbers