import React from 'react';
import Button from '../button/Button';
import PropTypes from 'prop-types';

const Functions = ({ onContentClear, onDelete }) => (
    <section className='functions'>
        <Button text="Clear" type="button-long-text" clickHandler={onContentClear}></Button>
        <Button text="&larr;" type="functions" clickHandler={onDelete}></Button>
    </section>
)
Functions.propTypes = {
    onContentClear: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
}
export default Functions