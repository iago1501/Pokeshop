import React from 'react';
import { Switch, Route } from "react-router-dom";

import Header from './components/Header';
import PokeShopHome from 'components/PokeShopHome'
import PokeContainer from './components/PokeContainer';

const App = () => {

    return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={PokeShopHome} />
                <Route path="/shop/:type" component={PokeContainer} />
            </Switch>
        </div>
    );
};

export default App;
