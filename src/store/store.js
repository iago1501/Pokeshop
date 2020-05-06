import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';

import rootReducer from './ducks/root-reducer';

const middleWares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middleWares));
export const persistor = persistStore(store);

export default { store, persistor };
