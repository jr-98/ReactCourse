import { handleActions } from 'redux-actions';
import { FETCH_CUSTOMERS, INSERT_CUSTOMER, UPDATE_CUSTOMERS } from '../constants';
//handleActions([ocj,inivtail value])
export const customers = handleActions({
    [FETCH_CUSTOMERS]: (state, actions) => [...actions.payload],
    [INSERT_CUSTOMER]: (state, action) => [...state, action.payload],
    [UPDATE_CUSTOMERS]: (state, action) => {
        const customerPayload = action.payload
        //[{id:1,dni:,nombre:,age:}]
        //[{id:2,dni:,nombre:,age:}]
        const { id } = customerPayload//id:'2'
        //[{id:1,dni:,nombre:,age:}]
        //[{id:2,dni:,nombre:,age:}] (actulizar este dato porque es el unico registro que se esta editando)
        const customers = state; // Nunca se trabaja con el stado original, siempore es con una copia
        // acc=[], customer=   //[{id:1,dni:,nombre:,age:}] 1 =>No match
        // acc=[{id:1,dni:,nombre:,age:}] , customer= //[{id:2,dni:,nombre:,age:}] 2 =>No match 
        const newCustomers = customers.reduce((acc, customer) => {
            if (customer.id === id) {
                // customer= [{id:2,dni:'oldDni',nombre:'oldName':olddAge}] remplace to customer= [{id:2,dni:'newDni',nombre:'newName':newAge}]
                return [...acc, customerPayload]
            } else {
                return [...acc, customer]
            }
        }, [])
        //[{id:1,dni:,nombre:,age:}]
        // [{ id: 2, dni: 'newDni', nombre: 'newName': newAge }]
        return newCustomers
    }
}, [])