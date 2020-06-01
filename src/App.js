import React from 'react';
import { Switch, Route, Redirect, HashRouter } from 'react-router-dom';

import Header from 'components/Header';
import PokeShopHome from 'components/PokeShopHome';
import PokeShopContainer from 'components/PokeShopContainer';
import CheckoutContainer from 'components/CheckoutContainer';
import CheckoutSuccess from 'components/CheckoutSuccess';

const App = () => {
    return (
        <div>
            <Header />
            <HashRouter basename="/">
                <Switch>
                    <Route exact path="/" component={PokeShopHome} />
                    <Route
                        exact
                        path="/shop/checkout"
                        component={CheckoutContainer}
                    />
                    <Route
                        exact
                        path="/shop/checkout/success"
                        component={CheckoutSuccess}
                    />
                    <Route path="/:type/shop" component={PokeShopContainer} />
                    <Route exact path="/shop">
                        <Redirect to={'/'} />
                    </Route>
                </Switch>
            </HashRouter>
        </div>
    );
};

export default App;
