import React from 'react'
import PropTypes from 'prop-types'
import CustomerListItem from '../CustomerListItem'

const CustomerList = ({ customers, urlPath }) => {
    return (
        <div>
            <div className="customerts-list">
                {
                    customers && customers.map(c =>
                        <CustomerListItem
                            key={c.dni}
                            name={c.name}
                            editAction={'Editar'}
                            delAction={'Borrar'}
                            urlPath={urlPath} />)
                }
                )
            </div>
        </div>
    )
}

CustomerList.propTypes = {
    customers: PropTypes.array.isRequired,
    urlPath: PropTypes.string.isRequired
}

export default CustomerList