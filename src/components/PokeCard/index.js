import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import { addPokemon } from 'store/ducks/cart';
import { typeFetchSelector } from 'store/ducks/pokemon';
import { Skeleton } from '@material-ui/lab';

import { EightbitButton } from '../CustomUI/Button';
import PokeBadges from '../PokeBadges';
import {
    CardContainer,
    PokePrice,
    CardImageContainer,
    CardImage,
    InfoContainer,
    PokeInfo,
    PokeName,
    PokeSizes,
} from './styles.js';

const PokeCard = ({ name }) => {
    const [pokemon, setPokemon] = useState();
    const dispatch = useDispatch();
    const type = useSelector(typeFetchSelector)

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'https://pokeapi.co/api/v2/pokemon/' + name
            );

            setPokemon(result.data);
        };

        fetchData();
    }, [name]);

    const getSizeInMeters = (value) => value / 10;
    const getWeightInKg = (value) => value / 10;
    const getPrice = (height, weight) => ((height + weight) / 10).toFixed(2);

    return (
        !!pokemon ?
            <CardContainer type = {type}>
                <PokeSizes>
                    {getSizeInMeters(pokemon.height)}m <br />
                    {getWeightInKg(pokemon.weight)}kg
                </PokeSizes>
                <CardImageContainer>
                    <CardImage src={pokemon.sprites.front_default} />
                </CardImageContainer>
                <InfoContainer>
                    <PokeInfo>
                        <PokeName>
                            #{pokemon.id} {pokemon.name}
                        </PokeName>
                        <PokePrice>
                            R$ {getPrice(pokemon.height, pokemon.weight)}
                        </PokePrice>
                    </PokeInfo>
                    <PokeBadges types={pokemon.types} />
                </InfoContainer>
                <EightbitButton
                    onClick={() =>
                        dispatch(
                            addPokemon(
                                pokemon,
                                getPrice(pokemon.height, pokemon.weight)
                            )
                        )
                    }
                >
                    Add to Cart
                </EightbitButton>
            </CardContainer> :
            <Skeleton variant="rect" width={'100%'} height={'42vh'} />

    );
};

export default PokeCard;
