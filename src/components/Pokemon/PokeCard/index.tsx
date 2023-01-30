import { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router';
import { RouteComponentProps } from 'react-router-dom';
import { useStarred } from 'hooks/useStarred';
import { getPokemonByIdOrName, Pokemon } from 'store/ducks/pokemon';

import { addPokemon } from 'store/ducks/cart';
import { Skeleton } from '@material-ui/lab';
import StarIcon from '@material-ui/icons/Star';

import { PressStart2P } from 'components/CustomUI/Fonts';
import Tooltip from '@material-ui/core/Tooltip';
import { EightbitButton } from '../../CustomUI/Button';
import { PokeBadges } from '../PokeBadges';

import {
    CardContainer,
    PokePrice,
    CardImageContainer,
    CardImage,
    InfoContainer,
    PokeInfo,
    PokeName,
    PokeSizes,
    ButtonContainer,
    Favorite,
} from './styles';

const HtmlTooltip = withStyles(() => ({
    tooltip: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        color: 'white',
        maxWidth: 220,
        marginTop: '-20px',
        fontSize: '8px',
    },
}))(Tooltip);

interface PokeCardProps extends RouteComponentProps {
    name: string;
    type: string;
}

interface PokemonWithStarred extends Pokemon {
    starred: string;
}

const PokeCard = ({ name, type, history }: PokeCardProps) => {
    const [pokemon, setPokemon] = useState<PokemonWithStarred>();
    const dispatch = useDispatch();
    const { updateStarredList } = useStarred();
    const { starred } = useStarred();

    useEffect(() => {
        const fetchData = async () => {
            const pokemonResult = await getPokemonByIdOrName(name);
            const isStarred = starred.find(
                (starredPokemon) => starredPokemon.id === pokemonResult.id
            );
            setPokemon({
                ...pokemonResult,
                starred: isStarred ? 'starred' : 'notStarred',
            });
        };

        fetchData();
    }, [name, starred]);

    const getSizeInMeters = (value: number): string => (value / 10).toString();
    const getWeightInKg = (value: number): string => (value / 10).toString();
    const getPrice = (height: number, weight: number): number =>
        Number(((height + weight) / 10).toFixed(2));

    return pokemon ? (
        <CardContainer type={type}>
            <PokeSizes>
                <span>#{pokemon.id}</span>
                <span>{getSizeInMeters(pokemon.height)}m</span>
                <span>{getWeightInKg(pokemon.weight)}kg</span>
            </PokeSizes>
            <HtmlTooltip
                onClick={() =>
                    history.push(`/${type}/pokemon/details/${pokemon.id}`)
                }
                title={<PressStart2P>Details</PressStart2P>}
            >
                <CardImageContainer>
                    <CardImage src={pokemon.sprites.front_default} />
                </CardImageContainer>
            </HtmlTooltip>
            <Favorite
                starred={pokemon.starred}
                onClick={() => updateStarredList({ ...pokemon, type })}
            >
                <StarIcon />
            </Favorite>
            <InfoContainer>
                <PokeInfo>
                    <PokeName>{pokemon.name}</PokeName>
                    <PokePrice>
                        R$ {getPrice(pokemon.height, pokemon.weight)}
                    </PokePrice>
                </PokeInfo>
                <PokeBadges types={pokemon.types} />
            </InfoContainer>
            <ButtonContainer>
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
            </ButtonContainer>
        </CardContainer>
    ) : (
        <Skeleton variant="rect" width="100%" height="42vh" />
    );
};

export default withRouter(PokeCard);
