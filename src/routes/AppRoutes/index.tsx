import { Switch, Route, Redirect } from 'react-router-dom';

import PokeShopHome from 'pages/PokeShopHome';
import { PokeShop } from 'routes/PokeShop';
import CheckoutContainer from 'pages/Checkout';
import CheckoutSuccess from 'components/Checkout/CheckoutSuccess';

export const AppRoutes = () => (
    <Switch>
        <Route exact path="/" component={PokeShopHome} />
        <Route exact path="/shop/checkout" component={CheckoutContainer} />
        <Route
            exact
            path="/shop/checkout/success"
            component={CheckoutSuccess}
        />
        <Route path="/:type/shop" component={PokeShop} />
        <Route exact path="/shop">
            <Redirect to="/" />
        </Route>
    </Switch>
);
