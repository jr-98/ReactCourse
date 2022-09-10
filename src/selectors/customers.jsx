import { createSelector } from 'reselect'

export const getCustomers = state => state.customers

export const selectCustomerById = createSelector(
    (state, props) => state.customers.find(c => c.dni === props),
    customer => customer
)