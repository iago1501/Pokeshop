import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import Reducer from './reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['reducer'],
};

const rootReducer = combineReducers({
    reducer: Reducer,
});

export default persistReducer(persistConfig, rootReducer);
