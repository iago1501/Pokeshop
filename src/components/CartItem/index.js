import React from 'react';

import styled from 'styled-components';

export const PokemonCartImage = styled.img`
    height: 50px;
`;

export const PokemonCartContainer = styled.div`
    display: flex;
    border-bottom: 1px solid #000;
    padding: 5px;
`;

export const PokemonCartInfos = styled.div`
    text-transform: capitalize;
    align-self: center;
    display: flex;
    flex-direction: column;
    & > span {
        font-size: 10px;
    }
    & > p {
        font-size: 15px;
        text-align: left;
        margin-block-start: 0.5em;
        margin-block-end: 0.5em;
    }
`;

const CartItem = ({ name, sprites, quantity, price }) => {
    const total = quantity * price;
    return (
        <PokemonCartContainer>
            <PokemonCartImage alt={name} src={sprites.front_default} />
            <PokemonCartInfos>
                <p>{name}</p>{' '}
                <span>
                    {quantity} x {price} = R${total}
                </span>
            </PokemonCartInfos>
        </PokemonCartContainer>
    );
};

export default CartItem;
