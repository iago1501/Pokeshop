import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";

import Header from 'components/Header';
import PokeShopHome from 'components/PokeShopHome'
import PokeShopContainer from 'components/PokeShopContainer'

const App = () => {

    return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={PokeShopHome} />
                <Route exact path="/shop"><Redirect to={'/'} /></Route>
                <Route path="/:type/shop" component={PokeShopContainer}/>
            </Switch>
        </div>
    );
};

export default App;
