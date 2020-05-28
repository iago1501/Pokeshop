import React from 'react';
import ReactDOM from 'react-dom';
// import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import App from './App';
import './index.css'
import GlobalStyle from  './components/CustomUI/Global'

import { store, persistor } from './store/store';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            {/* <PersistGate persistor={persistor}> */}
            <GlobalStyle/>
            <App />
            {/* </PersistGate> */}
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
