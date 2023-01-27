import { useState, useEffect } from 'react';
import { getPokemonByIdOrName, Pokemon, Sprites } from 'store/ducks/pokemon';
import { addPokemon } from 'store/ducks/cart';
import { useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import { PressStart2P } from '../CustomUI/Fonts';
import PokeBadges from '../PokeBadges';
import PokeStatusContainer from '../PokeStatusContainer';
import { EightbitButton } from '../CustomUI/Button';

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

type PokeDetailsParams = {
    id: string;
};

function PokeDetails() {
    const [pokemon, setPokemon] = useState<Pokemon>();
    const { id } = useParams<PokeDetailsParams>();
    const [pokemonSprite, setPokemonSprite] = useState('front_default');
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            const result = await getPokemonByIdOrName(id);
            setPokemon(result);
        };

        fetchData();
    }, [id]);

    const getPrice = (height: number, weight: number) =>
        ((height + weight) / 10).toFixed(2);

    function changeSprite() {
        if (pokemonSprite === 'front_default') {
            return setPokemonSprite('back_default');
        }
        return setPokemonSprite('front_default');
    }

    const capitalize = (s: any) => {
        if (typeof s !== 'string') return '';
        return s.charAt(0).toUpperCase() + s.slice(1);
    };

    if (!pokemon) {
        // TODO: Fetch Error
        return <div>Loading...</div>;
    }

    return (
        pokemon && (
            <>
                <Helmet>
                    <title>PokéShop - {capitalize(pokemon.name)} Details</title>
                    <meta
                        name="description"
                        content={`Details of Pokèmon ${pokemon.name}, where you can view all it's status`}
                    />
                </Helmet>
                {/* <Button variant="contained" style={{marginTop: '12vh', marginLeft: '10px'}}>Back to Shop</Button> */}
                <PokeDetailsContainer>
                    <PokeWrapper>
                        <PomeImageContainer>
                            <button type="button" onClick={changeSprite}>
                                <PressStart2P>&lt;</PressStart2P>
                            </button>
                            <PokeImage
                                src={
                                    pokemon.sprites[
                                        pokemonSprite as keyof Sprites
                                    ]
                                }
                            />
                            <button type="button" onClick={changeSprite}>
                                <PressStart2P>&gt;</PressStart2P>
                            </button>
                        </PomeImageContainer>
                        <PokeBaseInfoContainer>
                            <PokeBaseInfo>
                                <BaseInfoHeader>
                                    <PressStart2P>
                                        {'>'} {pokemon.name.toUpperCase()}
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
}

export default PokeDetails;
