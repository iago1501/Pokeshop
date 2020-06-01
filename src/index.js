import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';

import { store, persistor } from './store/store';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter basename="/pokeshop">
            {/* <PersistGate persistor={persistor}> */}
            <App />
            {/* </PersistGate> */}
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
