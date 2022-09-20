import { createAction } from "redux-actions";
import { apiPut } from "../api";
import { urlCustomers } from "../api/urls";
import { UPDATE_CUSTOMERS } from "../constants";

export const updateCustomer = createAction(UPDATE_CUSTOMERS,
    (id, customer) => apiPut(urlCustomers, id, customer)())