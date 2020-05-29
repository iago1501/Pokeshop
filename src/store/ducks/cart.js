import { createSelector } from "reselect";

// Selectors

export const cartSelector = (state) => state.cart.cartItems;

export const selectCartItemsCount = createSelector(
    [cartSelector],
    cartItems =>
      cartItems.reduce(
        (accumulatedQuantity, cartItem) =>
          accumulatedQuantity + cartItem.quantity,
        0
      )
  );

// Action Types

export const Types = {
    ADD_POKEMON: 'cart/ADD_POKEMON',
    REMOVE_POKEMON: 'cart/REMOVE_POKEMON',
};

// Reducer

const INITIAL_STATE = {
    cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Types.ADD_POKEMON:
            return {
                ...state,
                cartItems: addPokemonToCart(state.cartItems, action.payload),
            };
        case Types.REMOVE_POKEMON:
            return {
                ...state,
                cartItems: removePokemonFromCart(state.cartItems, action.payload),
            };
        default:
            return state;
    }
};

// Action Creators

export const addPokemon = (pokemon, price) => ({
    type: Types.ADD_POKEMON,
    payload: {...pokemon, price},
});

export const removePokemon = (pokemon) => ({
    type: Types.REMOVE_POKEMON,
    payload: pokemon,
});

//Utils
export const addPokemonToCart = (cartItems, pokemonToAdd) => {
    const { name, height, weight, id, types, sprites, price } = pokemonToAdd;

    const existingCartItem = cartItems.find((cartItem) => cartItem.id === id);

    if (existingCartItem) {
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

export const removePokemonFromCart = (cartItems, PokemonToRemove) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === PokemonToRemove.id
    );

    if (existingCartItem.quantity === 1) {
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

export default cartReducer;
