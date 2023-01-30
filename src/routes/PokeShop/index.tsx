import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
    Route,
    Redirect,
    useParams,
    RouteComponentProps,
} from 'react-router-dom';
import { clearType, fetchPokemonStartAsync } from 'store/ducks/pokemon';

import { PokeSearch } from '../../pages/PokeSearch';
import { PokeDetails } from '../../pages/PokeDetails';

type PokeShopParams = {
    type: string;
};

export const PokeShop = ({ match }: RouteComponentProps) => {
    const dispatch = useDispatch();
    const { type } = useParams<PokeShopParams>();

    useEffect(() => {
        dispatch(clearType());
        dispatch(fetchPokemonStartAsync(type));
    }, [type, dispatch]);

    return (
        <>
            <Route exact path="/:type">
                <Redirect to={`${match.url}/pokemon`} />
            </Route>
            <Route exact path="/:type/pokemon">
                <PokeSearch />
            </Route>
            <Route exact path="/:type/pokemon/details/:id">
                <PokeDetails />
            </Route>
        </>
    );
};
