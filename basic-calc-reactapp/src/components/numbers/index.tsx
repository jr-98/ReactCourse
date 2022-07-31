import React, { FC } from 'react'
import Button, { ButtomClickHandler } from '../Button'

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

export default Numbers