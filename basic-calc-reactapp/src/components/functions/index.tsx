import React, { FC } from 'react';
import Button, { ButtomClickHandler } from '../Button';
// import PropTypes from 'prop-types';
type Props = {
    onContentClear: ButtomClickHandler,
    onDelete: ButtomClickHandler
}
const Functions: FC<Props> = ({ onContentClear, onDelete }) => (
    <section className='functions'>
        <Button text="Clear" type="button-long-text" clickHandler={onContentClear}></Button>
        <Button text="&larr;" type="functions" clickHandler={onDelete}></Button>
    </section>
)
// Functions.propTypes = {
//     onContentClear: PropTypes.func.isRequired,
//     onDelete: PropTypes.func.isRequired,
// }
export default Functions