import axios from 'axios';
import { createSelector } from 'reselect';

// Selectors

export const pokemonSelector = (state) => state.pokemon.list;
export const typeFetchSelector = (state) => state.pokemon.type;
export const pokemonToShowSelector = (state) => state.pokemon.toShow;
export const nextPokemonSliceToShow = (state) => state.pokemon.nextToShow;
export const pokemonListSplittedSelector = (state) =>
    state.pokemon.filteredList.length > 0
        ? split(state.pokemon.filteredList, 18)
        : split(state.pokemon.list, 18);

// Action Types

export const Types = {
    FETCH_POKEMON_SUCCESS: 'pokemon/FETCH_POKEMON_SUCCESS',
    FETCH_POKEMON_FAILURE: 'pokemon/FETCH_POKEMON_FAILURE',
    POKEMON_TO_SHOW: 'pokemon/POKEMON_TO_SHOW',
    SEARCH_POKEMON: 'pokemon/SEARCH_POKEMON',
    CLEAR_TO_SHOW: 'pokemon/CLEAR_TO_SHOW',
};

// Reducer

const INITIAL_STATE = {
    list: [],
    type: '',
    toShow: [],
    nextToShow: 0,
    filteredList: [],
};

const pokemonReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Types.FETCH_POKEMON_SUCCESS:
            return {
                ...state,
                list: action.payload.data.pokemon,
                type: action.payload.data.name,
            };
        case Types.POKEMON_TO_SHOW:
            return {
                ...state,
                toShow: getPokemonToShow(
                    state.list,
                    state.filteredList,
                    state.toShow,
                    state.nextToShow
                ),
                nextToShow: state.nextToShow + 1,
            };
        case Types.CLEAR_TO_SHOW:
            return {
                ...state,
                nextToShow: 0,
                toShow: [],
            };
        case Types.SEARCH_POKEMON:
            return {
                ...state,
                filteredList: state.list.filter(
                    (pokeInfo) =>
                        pokeInfo.pokemon.name
                            .toLowerCase()
                            .includes(action.payload.toLowerCase()) && pokeInfo
                ),
            };
        default:
            return state;
    }
};

//utils

const API_TYPES = {
    normal: '1',
    fighting: '2',
    physical: '3',
    fire: '10',
    ghost: '8',
    water: '11',
    grass: '12',
    electric: '13',
    fairy: '18',
    ice: '15',
    psychic: '14',
};

//utils

const split = (array, n) => {
    let [...arr] = array;
    var res = [];
    while (arr.length) {
        res.push(arr.splice(0, n));
    }
    return res;
};

const getPokemonToShow = (fullList, filteredList, toShow, nextToShow) => {
    const list = filteredList.length > 0 ? filteredList : fullList;

    if (split(list, 18).length > nextToShow)
        return [...toShow, ...split(list, 18)[nextToShow]];

    return toShow;
};

// Action Creators

export const fetchPokemonSuccess = (pokeCollection) => ({
    type: Types.FETCH_POKEMON_SUCCESS,
    payload: pokeCollection,
});

export const pokemonToShow = () => ({
    type: Types.POKEMON_TO_SHOW,
});

export const filterList = (text) => ({
    type: Types.SEARCH_POKEMON,
    payload: text,
});

export const clearToShow = () => ({
    type: Types.CLEAR_TO_SHOW,
});

export const searchPokemon = (text) => {
    //acrescentar debounce
    return (dispatch) => {
        dispatch(filterList(text));
        dispatch(clearToShow());
        dispatch(pokemonToShow());
    };
};

export const LoadMore = () => {
    return (dispatch) => {
        dispatch(pokemonToShow());
    };
};

export const fetchPokemonStartAsync = (type) => {
    return (dispatch) => {
        axios
            .get(`https://pokeapi.co/api/v2/type/${API_TYPES[type]}`)
            .then((res) => {
                dispatch(fetchPokemonSuccess(res));
                dispatch(pokemonToShow());
            })
            .catch((error) => dispatch(fetchPokemonSuccess(error)));
    };
};

export default pokemonReducer;
