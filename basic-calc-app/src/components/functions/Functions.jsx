import React from 'react';
import Button from '../button/Button';
import PropTypes from 'prop-types';
import './../../App.css';

const Functions = ({ onContentClear, onDelete }) => (
    <section>
        <Button text="Clear" type="functions" clickHandler={onContentClear}></Button>
        <Button text="&larr;" type="functions" clickHandler={onDelete}></Button>
    </section>
)
Functions.propTypes = {
    onContentClear: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
}
export default Functions