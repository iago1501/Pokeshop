import { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import { RouteComponentProps } from 'react-router-dom';
import {
    getPokemonByIdOrName,
    typeFetchSelector,
    Pokemon,
} from 'store/ducks/pokemon';

import { addPokemon } from 'store/ducks/cart';
import { Skeleton } from '@material-ui/lab';

import { PressStart2P } from 'components/CustomUI/Fonts';
import Tooltip from '@material-ui/core/Tooltip';
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
    ButtonContainer,
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
}

const PokeCard = ({ name, match, history }: PokeCardProps) => {
    const [pokemon, setPokemon] = useState<Pokemon>();
    const dispatch = useDispatch();
    const type = useSelector(typeFetchSelector);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getPokemonByIdOrName(name);
            setPokemon(result);
        };

        fetchData();
    }, [name]);

    const getSizeInMeters = (value: number): string => (value / 10).toString();
    const getWeightInKg = (value: number): string => (value / 10).toString();
    const getPrice = (height: number, weight: number): number =>
        Number(((height + weight) / 10).toFixed(2));

    return pokemon ? (
        <CardContainer type={type}>
            <PokeSizes>
                {getSizeInMeters(pokemon.height)}m <br />
                {getWeightInKg(pokemon.weight)}kg
            </PokeSizes>
            <HtmlTooltip
                onClick={() =>
                    history.push(`${match.url}/details/${pokemon.id}`)
                }
                title={<PressStart2P>Details</PressStart2P>}
            >
                <CardImageContainer>
                    <CardImage src={pokemon.sprites.front_default} />
                </CardImageContainer>
            </HtmlTooltip>
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
                    Add to Cart
                </EightbitButton>
            </ButtonContainer>
        </CardContainer>
    ) : (
        <Skeleton variant="rect" width="100%" height="42vh" />
    );
};

export default withRouter(PokeCard);
