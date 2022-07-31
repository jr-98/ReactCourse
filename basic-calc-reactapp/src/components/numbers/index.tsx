import React, { FC } from 'react'
import Button, { ButtomClickHandler } from '../Button'
// import PropTypes from 'prop-types'

type Props = {
    onClickNumber: ButtomClickHandler
}

const number = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];

const renderButtons = (onClickNumber: ButtomClickHandler) => {
    return number.map((number: number) =>
        <Button
            key={number}
            text={number.toString()}
            clickHandler={onClickNumber} />
    )
}
const Numbers: FC<Props> = ({ onClickNumber }) => {
    return (
        <section className="numbers">
            {renderButtons(onClickNumber)}
        </section>
    )
}
// Numbers.propTypes = {
//     onClickNumber: PropTypes.func.isRequired
// }
export default Numbers