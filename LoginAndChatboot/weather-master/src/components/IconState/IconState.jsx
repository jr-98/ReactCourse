import React from 'react';
import PropTypes from 'prop-types';
import {
    AiOutlineRobot,
    AiFillRobot
} from "react-icons/ai";


export const validValues = [
    "robot",
    "robotFlk"
]
const stateByName = {
    robot: AiOutlineRobot,
    robotWht: AiFillRobot,
}
const InconState = ({ state }) => {
    const StateByName = stateByName[state]

    return (
        <StateByName />
    )
}

InconState.propTypes = {
    state: PropTypes.oneOf(validValues).isRequired,
}

export default InconState
