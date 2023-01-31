import { useState, useEffect } from 'react';
import { getPokemonByIdOrName, Pokemon, Sprites } from 'store/ducks/pokemon';
import { addPokemon } from 'store/ducks/cart';
import { useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import { capitalize } from 'utils';
import { useStarred } from 'hooks/useStarred';
import StarIcon from '@material-ui/icons/Star';

import { PokeBadges } from '../../components/Pokemon/PokeBadges';

import {
    PressStart2P,
    PressStart2PParagraph,
    PressStart2PSpan,
} from '../../components/CustomUI/Fonts';
import { PokeStatusContainer } from '../../components/Pokemon/PokeStatusContainer';
import { EightbitButton } from '../../components/CustomUI/Button';

import {
    PokeDetailsContainer,
    PokeWrapper,
    PokeImageContainer,
    PokeImage,
    PokeBaseInfoContainer,
    PokeBaseInfo,
    BaseInfoHeader,
    BaseInfoBody,
    ActionDiv,
    Favorite,
    PokeNameContainer,
} from './style';

type PokeDetailsParams = {
    id: string;
};

interface PokeDetailsProps extends Pokemon {
    starred: string;
}

export function PokeDetails() {
    const [pokemon, setPokemon] = useState<PokeDetailsProps>();
    const { id } = useParams<PokeDetailsParams>();
    const { updateStarredList, starred } = useStarred();
    const [pokemonSprite, setPokemonSprite] = useState('front_default');
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            const pokemonResult = await getPokemonByIdOrName(id);

            const isStarred = starred.find(
                (starredPokemon) => starredPokemon.id === pokemonResult.id
            );
            setPokemon({
                ...pokemonResult,
                starred: isStarred ? 'starred' : 'notStarred',
            });
        };

        fetchData();
    }, [id, starred]);

    const getPrice = (height: number, weight: number): number =>
        Number(((height + weight) / 10).toFixed(2));

    function changeSprite() {
        if (pokemonSprite === 'front_default') {
            return setPokemonSprite('back_default');
        }
        return setPokemonSprite('front_default');
    }

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
                        <PokeImageContainer>
                            <button type="button" onClick={changeSprite}>
                                <PressStart2PSpan>{'<'}</PressStart2PSpan>
                            </button>
                            <PokeImage
                                src={
                                    pokemon.sprites[
                                        pokemonSprite as keyof Sprites
                                    ]
                                }
                            />
                            <button type="button" onClick={changeSprite}>
                                <PressStart2PSpan>{'>'}</PressStart2PSpan>
                            </button>
                        </PokeImageContainer>
                        <PokeBaseInfoContainer>
                            {/* TODO: Evolutions */}
                            <PokeBaseInfo>
                                <BaseInfoHeader>
                                    <PokeNameContainer>
                                        <PressStart2P>
                                            {`> ${pokemon.name.toUpperCase()}`}
                                        </PressStart2P>
                                        <Favorite
                                            starred={pokemon.starred}
                                            onClick={() =>
                                                updateStarredList({
                                                    ...pokemon,
                                                    type: pokemon.types[0].type
                                                        .name,
                                                })
                                            }
                                        >
                                            <StarIcon />
                                        </Favorite>
                                    </PokeNameContainer>
                                    <div>
                                        <PokeBadges types={pokemon.types} />
                                    </div>
                                </BaseInfoHeader>
                                <BaseInfoBody>
                                    <PressStart2PParagraph>
                                        Weight: {pokemon.weight}
                                    </PressStart2PParagraph>
                                    <PressStart2PParagraph>
                                        Height: {pokemon.height}
                                    </PressStart2PParagraph>
                                    <PressStart2PParagraph>
                                        BaseXP: {pokemon.base_experience}
                                    </PressStart2PParagraph>
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
                            Catch this
                        </EightbitButton>
                    </ActionDiv>
                    {pokemon.stats && (
                        <PokeStatusContainer stats={pokemon.stats} />
                    )}
                </PokeDetailsContainer>
            </>
        )
    );
}
