import React from 'react';

import styled from 'styled-components';

export const PokemonCartImage = styled.img`
  height: 50px;
`;

export const PokemonCartContainer = styled.div`
    display: flex;
    border-bottom: 1px solid #000;
    padding: 5px;
`

export const PokemonCartName = styled.div`
    text-transform: capitalize;
    padding: 10px;
`



const CartItem = ({ name, sprites, quantity, price }) => {
    const total = quantity * price;
    return (
        <PokemonCartContainer>
            <PokemonCartImage alt={name} src={sprites.front_default}/>
            <PokemonCartName>{name}</PokemonCartName>
            <span>{quantity} x {price} = {total}</span>
        </PokemonCartContainer>
    );
};

export default CartItem;
