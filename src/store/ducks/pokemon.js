import axios from 'axios';

// Selectors

 export const pokemonSelector = (state) => state.pokemon.list;
 export const typePokemonSelector = (state) => state.pokemon.type;

// Action Types

export const Types = {
    FETCH_POKEMON_SUCCESS: 'pokemon/FETCH_POKEMON_SUCCESS',
    FETCH_POKEMON_FAILURE: 'pokemon/FETCH_POKEMON_FAILURE',
};

// Reducer

const INITIAL_STATE = {
    list: [],
    type: '',
};

const pokemonReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Types.FETCH_POKEMON_SUCCESS:
            return { ...state,
                list: action.payload.data.pokemon,
                type: action.payload.data.name
             };
        default:
            return state;
    }
};

// Action Creators

export const fetchPokemonSuccess = (pokeCollection) => ({
    type: Types.FETCH_POKEMON_SUCCESS,
    payload: pokeCollection,
});

export const fetchPokemonStartAsync = () => {
    return (dispatch) => {
        axios
            .get('https://pokeapi.co/api/v2/type/10')
            // .get('https://pokeapi.co/api/v2/type/8')
            .then((res) => {
                 dispatch(fetchPokemonSuccess(res))
            })
            .catch((error) => dispatch(fetchPokemonSuccess(error)));
    };
};

export default pokemonReducer;
