
import { SET_CITY } from '../actions';
//Se asigna val;ores por defecto a parametros de funcioes para evitar crasheos de la app
export const city = (state = {}, action) => {

    switch (action.type) {
        case SET_CITY:
            return action.payload
        default:
            return state;
    }
}