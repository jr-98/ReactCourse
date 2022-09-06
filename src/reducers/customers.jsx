import { handleActions } from 'redux-actions';
import { FETCH_CUSTOMERS } from '../constants';
//handleActions([ocj,inivtail value])
export const customers = handleActions({
    [FETCH_CUSTOMERS]: (state, actions) => [...actions.payload],
}, [])