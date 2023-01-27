import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
    Route,
    Redirect,
    useParams,
    RouteComponentProps,
} from 'react-router-dom';
import { fetchPokemonStartAsync } from 'store/ducks/pokemon';

import PokeContainer from '../PokeContainer';
import PokeDetails from '../PokeDetails';

type PokeShopContainerParams = {
    type: string;
};

const PokeShopContainer = ({ match }: RouteComponentProps) => {
    const dispatch = useDispatch();
    const { type } = useParams<PokeShopContainerParams>();

    useEffect(() => {
        dispatch(fetchPokemonStartAsync(type));
    }, [type, dispatch]);

    return (
        <>
            <Route exact path="/:type/shop">
                <Redirect to={`${match.url}/pokemon`} />
            </Route>
            <Route exact path="/:type/shop/pokemon">
                <PokeContainer />
            </Route>
            <Route exact path="/:type/shop/pokemon/details/:id">
                <PokeDetails />
            </Route>
        </>
    );
};

export default PokeShopContainer;
