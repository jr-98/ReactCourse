import { createAction } from 'redux-actions';
import { FETCH_CUSTOMERS } from "../constants";

const customers = [
    {
        "dni": '27000000',
        "name": 'Juan Perez',
        "age": 37
    },
    {
        "dni": '1104316548',
        "name": 'Evelyn Alexandra',
        "age": 24
    },
    {
        "dni": '3209320932',
        "name": 'Bambestre Rosalia',
        "age": 34
    },
    {
        "dni": '3209343442',
        "name": 'Totis del Carmen ',
        "age": 34
    },

]
//export const fetchCustomer = () => ({ type: FETCH_CUSTOMERS, payload: null })
export const fetchCustomer = createAction(FETCH_CUSTOMERS, () => customers);