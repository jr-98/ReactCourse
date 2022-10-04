import React from 'react'
import PropTypes from 'prop-types'
import CustomerListItem from '../CustomerListItem'
import { accessControl } from 'helpers/accessControl'
import { CUSTOMER_LIST } from 'constants/permissions'

const CustomerList = ({ customers, urlPath }) => {
    return (
        <div>
            <div className="customers-list">
                {
                    customers && customers.map(c =>
                        <CustomerListItem
                            key={c.dni}
                            dni={c.dni}
                            name={c.name}
                            editAction={'Editar'}
                            delAction={'Borrar'}
                            urlPath={urlPath} />)
                }
            </div>
        </div>
    )
}

CustomerList.propTypes = {
    customers: PropTypes.array.isRequired,
    urlPath: PropTypes.string.isRequired
}

export default accessControl([CUSTOMER_LIST])(CustomerList) 