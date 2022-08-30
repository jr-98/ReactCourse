import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

const CustomerListItem = ({ name, urlPath, dni, editAction, delAction }) => {
    return (
        <div>
            <div className="customer-list-item">
                <div className="fields">
                    <Link to={`${urlPath.urlPath}${dni}`}>{name}</Link>
                </div>
                <div className="fields">
                    <Link to={`${urlPath.urlPath}${dni}/edit`} >{editAction}</Link>
                </div>
                <div className="fields">
                    <Link to={`${urlPath.urlPath}${dni}/delete`}>{delAction}</Link>
                </div>
            </div>
        </div>
    )
}

CustomerListItem.propTypes = {
    name: PropTypes.string.isRequired,
    editAction: PropTypes.string.isRequired,
    delAction: PropTypes.string.isRequired,
    urlPath: PropTypes.string.isRequired,
}

export default CustomerListItem