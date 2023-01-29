import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
    Route,
    Redirect,
    useParams,
    RouteComponentProps,
} from 'react-router-dom';
import { fetchPokemonStartAsync } from 'store/ducks/pokemon';

import { PokeSearch } from '../../pages/PokeSearch';
import { PokeDetails } from '../../pages/PokeDetails';

type PokeShopParams = {
    type: string;
};

export const PokeShop = ({ match }: RouteComponentProps) => {
    const dispatch = useDispatch();
    const { type } = useParams<PokeShopParams>();

    useEffect(() => {
        dispatch(fetchPokemonStartAsync(type));
    }, [type, dispatch]);

    return (
        <>
            <Route exact path="/:type/shop">
                <Redirect to={`${match.url}/pokemon`} />
            </Route>
            <Route exact path="/:type/shop/pokemon">
                <PokeSearch />
            </Route>
            <Route exact path="/:type/shop/pokemon/details/:id">
                <PokeDetails />
            </Route>
        </>
    );
};
