import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import pokemonReducer from './ducks/pokemon';
import cartReducer from './ducks/cart'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'],
};

const rootReducer = combineReducers({
    pokemon: pokemonReducer,
    cart: cartReducer,
});

export default persistReducer(persistConfig, rootReducer);
