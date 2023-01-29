import { createSelector } from 'reselect';

import { AnyAction } from 'redux';
import { RootState } from '../root-reducer';
import { Pokemon } from './pokemon';

// Types
export interface PokemonCart extends Pokemon {
    quantity: number;
    price: number;
}

type INITIAL_STATE_TYPES = {
    cartItems: PokemonCart[];
};

// CONSTs

const INITIAL_STATE: INITIAL_STATE_TYPES = {
    cartItems: [],
};

// Action Types

export const Types = {
    ADD_POKEMON: 'cart/ADD_POKEMON',
    REMOVE_POKEMON: 'cart/REMOVE_POKEMON',
    CLEAR_POKEMON_FROM_CART: 'cart/CLEAR_ITEM',
    CLEAR_CART: 'CART/CLEAR_CART',
};

// Action Creators

export const addPokemon = (pokemon: Pokemon, price: number) => ({
    type: Types.ADD_POKEMON,
    payload: { ...pokemon, price },
});

export const removePokemon = (pokemon: Pokemon) => ({
    type: Types.REMOVE_POKEMON,
    payload: pokemon,
});

export const clearPokemon = (pokemonId: number) => ({
    type: Types.CLEAR_POKEMON_FROM_CART,
    payload: pokemonId,
});

export const clearCart = () => ({
    type: Types.CLEAR_CART,
});

// Utils
export const addPokemonToCart = (
    cartItems: PokemonCart[],
    pokemonToAdd: PokemonCart
): PokemonCart[] => {
    const { name, height, weight, id, types, sprites, price } = pokemonToAdd;

    const existsPokemonInCart = cartItems.find(
        (cartItem) => cartItem.id === id
    );

    if (existsPokemonInCart) {
        return cartItems.map((cartItem) =>
            cartItem.id === id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }

    return [
        ...cartItems,
        { id, name, height, types, weight, sprites, price, quantity: 1 },
    ];
};

export const removePokemonFromCart = (
    cartItems: PokemonCart[],
    PokemonToRemove: Pokemon
): PokemonCart[] => {
    const existsPokemonInCart = cartItems.find(
        (cartItem) => cartItem.id === PokemonToRemove.id
    );

    if (!existsPokemonInCart) return cartItems;

    if (existsPokemonInCart.quantity === 1) {
        return cartItems.filter(
            (cartItem) => cartItem.id !== PokemonToRemove.id
        );
    }

    return cartItems.map((cartItem) =>
        cartItem.id === PokemonToRemove.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    );
};

// Selectors

export const cartSelector = (state: RootState) => state.cart.cartItems;

export const selectCartItemsCount = createSelector(
    [cartSelector],
    (cartItems) =>
        cartItems.reduce(
            (accumulatedQuantity, cartItem) =>
                accumulatedQuantity + cartItem.quantity,
            0
        )
);

export const selectCartTotal = createSelector([cartSelector], (cartItems) =>
    cartItems.reduce(
        (accumulatedPrice, cartItem) =>
            accumulatedPrice + cartItem.quantity * cartItem.price,
        0
    )
);

// Reducer

const cartReducer = (state = INITIAL_STATE, action: AnyAction) => {
    switch (action.type) {
        case Types.ADD_POKEMON:
            return {
                ...state,
                cartItems: addPokemonToCart(state.cartItems, action.payload),
            };
        case Types.REMOVE_POKEMON:
            return {
                ...state,
                cartItems: removePokemonFromCart(
                    state.cartItems,
                    action.payload
                ),
            };
        case Types.CLEAR_POKEMON_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(
                    (cartItem) => cartItem.id !== action.payload
                ),
            };
        case Types.CLEAR_CART:
            return { ...INITIAL_STATE };
        default:
            return state;
    }
};

export default cartReducer;
