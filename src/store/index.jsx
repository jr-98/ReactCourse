import { compose, createStore } from 'redux';

const reducers = state => state;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducers,
    {},
    composeEnhancers()

);
