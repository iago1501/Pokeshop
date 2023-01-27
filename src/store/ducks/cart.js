import { createSelector } from 'reselect';

// Selectors

export const cartSelector = (state) => state.cart.cartItems;

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

// Action Types

export const Types = {
    ADD_POKEMON: 'cart/ADD_POKEMON',
    REMOVE_POKEMON: 'cart/REMOVE_POKEMON',
    CLEAR_POKEMON_FROM_CART: 'cart/CLEAR_ITEM',
    CLEAR_CART: 'CART/CLEAR_CART'
};

// Action Creators

export const addPokemon = (pokemon, price) => ({
    type: Types.ADD_POKEMON,
    payload: { ...pokemon, price },
});

export const removePokemon = (pokemon) => ({
    type: Types.REMOVE_POKEMON,
    payload: pokemon,
});

export const clearPokemon = (pokemonId) => ({
    type: Types.CLEAR_POKEMON_FROM_CART,
    payload: pokemonId,
});

export const clearCart = () => ({
    type: Types.CLEAR_CART,
});

// Utils
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
