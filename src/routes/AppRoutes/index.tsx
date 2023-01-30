import { Switch, Route, Redirect } from 'react-router-dom';

import PokeShopHome from 'pages/PokeShopHome';
import { PokeShop } from 'routes/PokeShop';
import CheckoutContainer from 'pages/Checkout';
import CheckoutSuccess from 'components/Checkout/CheckoutSuccess';
import { PokeStarred } from 'pages/Starred';

export const AppRoutes = () => (
    <Switch>
        <Route exact path="/" component={PokeShopHome} />
        <Route exact path="/checkout" component={CheckoutContainer} />
        <Route exact path="/checkout/success" component={CheckoutSuccess} />
        <Route exact path="/starred" component={PokeStarred} />
        <Route path="/:type/" component={PokeShop} />
        <Route exact path="/shop">
            <Redirect to="/" />
        </Route>
    </Switch>
);
