import { handleActions } from 'redux-actions';
import { FETCH_CUSTOMERS, INSERT_CUSTOMER } from '../constants';
//handleActions([ocj,inivtail value])
export const customers = handleActions({
    [FETCH_CUSTOMERS]: (state, actions) => [...actions.payload],
    [INSERT_CUSTOMER]: (state, action) => [...state, action.payload],
}, [])