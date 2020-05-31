import React from 'react';
import { useSelector } from 'react-redux';
import { cartSelector, selectCartTotal } from 'store/ducks/cart';
import CartItem from '../CartItem';
import styled from 'styled-components';
import { EightbitButton } from '../CustomUI/Button';

export const CartItemsContainer = styled.div`
    height: auto;
    max-height: 300px;
    width: 260px;
    top: 50px;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
`;

const CartContainer = ({ handleClose }) => {
    const cart = useSelector(cartSelector);
    const total = useSelector(selectCartTotal).toFixed(2);

    return (
        <div style={{ textAlign: 'center', padding: '10px' }}>
            <CartItemsContainer>
                {cart.length > 0 ? (
                    cart.map((pokemon) => (
                        <CartItem key={pokemon.id} pokemon={pokemon} />
                    ))
                ) : (
                    <p>Your cart is empty =/</p>
                )}
            </CartItemsContainer>
            {cart.length > 0 && (
                <div
                    style={{
                        textAlign: 'right',
                    }}
                >
                    <span>Subtotal: R$ {total}</span>
                </div>
            )}
            {cart.length > 0 && (
                <EightbitButton>Go to Checkout!</EightbitButton>
            )}
        </div>
    );
};

export default CartContainer;
