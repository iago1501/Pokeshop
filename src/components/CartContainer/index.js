import React from 'react';
import { useSelector } from 'react-redux';
import { cartSelector } from 'store/ducks/cart';
import CartItem from '../CartItem';
import styled from 'styled-components';
import { EightbitButton } from '../CustomUI/Button';

// está causando um bug ao renderizar

export const CartItemsContainer = styled.div`
    height: 300px;
    width: 260px;
    top: 50px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
`;

const CartContainer = ({ handleClose }) => {
    const cart = useSelector(cartSelector);

    return (
        <div style={{textAlign: 'center', padding: '10px'}}>
            <CartItemsContainer>
                {cart.map((pokemon) => (
                    <CartItem {...pokemon} />
                ))}
            </CartItemsContainer>
            <EightbitButton>Go to Checkout</EightbitButton>
        </div>
    );
};

export default CartContainer;
