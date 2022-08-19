import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

const initialState = {
    city: 'Loja, Ec'
}
//Unicamente es para la utilizacion del la herramienta de debuggin de redux
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducers, initialState, composeEnhancers(applyMiddleware(thunk)));