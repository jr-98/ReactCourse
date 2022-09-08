import { createAction } from 'redux-actions';
import { FETCH_CUSTOMERS } from "../constants";

const url = 'http://localhost:3001/customers';
const apiFetchCustomers = () => fetch(url).then(res => res.json());
//export const fetchCustomer = () => ({ type: FETCH_CUSTOMERS, payload: null })
export const fetchCustomer = createAction(FETCH_CUSTOMERS, apiFetchCustomers);