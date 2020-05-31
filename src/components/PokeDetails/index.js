import React, { useState, useEffect } from 'react';
import {
    getPokemonByIdOrName,
} from 'store/ducks/pokemon';

const PokeDetails = ({ match }) => {
    const [pokemon, setPokemon] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const result = await getPokemonByIdOrName(match.params.id);
            setPokemon(result);
        };

        fetchData();
    }, [match.params.id]);

    return !!pokemon && <h1>{pokemon.name}</h1>;
};

export default PokeDetails;
