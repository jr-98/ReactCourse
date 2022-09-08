import { createAction } from 'redux-actions';
import { getApiCustomers } from '../api';
import { urlCustomers } from '../api/urls';
import { FETCH_CUSTOMERS } from "../constants";

export const fetchCustomer = createAction(FETCH_CUSTOMERS, getApiCustomers(urlCustomers));