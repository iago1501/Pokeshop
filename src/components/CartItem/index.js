import React from 'react';
import { useDispatch } from 'react-redux';
import { removePokemon, addPokemon } from 'store/ducks/cart';
import { PressStart2P } from '../CustomUI/Fonts';
import {
    PokemonCartContainer,
    PokemonCartImage,
    PokemonCartInfos,
    PokemonCartName,
    ButtonContainer,
} from './styles';

const CartItem = ({ pokemon }) => {
    const { name, sprites, quantity, price} = pokemon;
    const total = (quantity * price).toFixed(2);
    const dispatch = useDispatch();

    return (
        <PokemonCartContainer>
            <PokemonCartImage alt={name} src={sprites.front_default} />
            <PokemonCartInfos>
                <PokemonCartName>{name}</PokemonCartName>
                <span>
                    R$ {price} * {quantity} = R$ {total}
                </span>
            </PokemonCartInfos>
            <ButtonContainer>
                <a onClick={() => dispatch(removePokemon(pokemon))}>
                    <PressStart2P>-</PressStart2P>
                </a>
                <PressStart2P>{quantity}</PressStart2P>
                <a onClick={() => dispatch(addPokemon(pokemon, price))}>
                    <PressStart2P>+</PressStart2P>
                </a>
            </ButtonContainer>
        </PokemonCartContainer>
    );
};

export default CartItem;
