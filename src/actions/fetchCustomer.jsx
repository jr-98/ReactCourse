import { createAction } from 'redux-actions';
import { FETCH_CUSTOMERS } from "../constants";

//export const fetchCustomer = () => ({ type: FETCH_CUSTOMERS, payload: null })
export const fetchCustomer = createAction(FETCH_CUSTOMERS);