import React, { useState, useEffect } from 'react';
import { getPokemonByIdOrName } from 'store/ducks/pokemon';
import { addPokemon } from 'store/ducks/cart';
import { PressStart2P } from '../CustomUI/Fonts';
import PokeBadges from '../PokeBadges';
import PokeStatusContainer from '../PokeStatusContainer';
import { EightbitButton } from '../CustomUI/Button';
import { useDispatch } from 'react-redux';
// import Button from '@material-ui/core/Button';

import {
    PokeDetailsContainer,
    PokeWrapper,
    PomeImageContainer,
    PokeImage,
    PokeBaseInfoContainer,
    PokeBaseInfo,
    BaseInfoHeader,
    BaseInfoBody,
    ActionDiv,
} from './style';

const PokeDetails = ({ match }) => {
    const [pokemon, setPokemon] = useState();
    const [pokemonSprite, setPokemonSprite] = useState('front_default');
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            const result = await getPokemonByIdOrName(match.params.id);
            setPokemon(result);
        };

        fetchData();
    }, [match.params.id]);

    const getPrice = (height, weight) => ((height + weight) / 10).toFixed(2);

    const changeSprite = () => {
        pokemonSprite === 'front_default'
            ? setPokemonSprite('back_default')
            : setPokemonSprite('front_default');
    };

    return (
        !!pokemon && (
            <>
            {/* <Button variant="contained" style={{marginTop: '12vh', marginLeft: '10px'}}>Back to Shop</Button> */}
            <PokeDetailsContainer>
                <PokeWrapper>
                    <PomeImageContainer>
                        <PressStart2P onClick={changeSprite}>&lt;</PressStart2P>{' '}
                        <PokeImage src={pokemon.sprites[pokemonSprite]} />{' '}
                        <PressStart2P onClick={changeSprite}>&gt;</PressStart2P>
                    </PomeImageContainer>
                    <PokeBaseInfoContainer>
                        <PokeBaseInfo>
                            <BaseInfoHeader>
                                <PressStart2P>
                                    > {pokemon.name.toUpperCase()}
                                </PressStart2P>
                                <PokeBadges types={pokemon.types} />
                            </BaseInfoHeader>
                            <BaseInfoBody>
                                <PressStart2P>
                                    Weight: {pokemon.weight}
                                </PressStart2P>
                                <PressStart2P>
                                    Height: {pokemon.height}
                                </PressStart2P>
                                <PressStart2P>
                                    BaseXP: {pokemon.base_experience}
                                </PressStart2P>
                            </BaseInfoBody>
                        </PokeBaseInfo>
                    </PokeBaseInfoContainer>
                </PokeWrapper>
                <ActionDiv>
                    <PressStart2P>
                        R$ {getPrice(pokemon.height, pokemon.weight)}
                    </PressStart2P>
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
                </ActionDiv>
                <PokeStatusContainer stats={pokemon.stats} />
            </PokeDetailsContainer>
            </>
        )
    );
};

export default PokeDetails;
