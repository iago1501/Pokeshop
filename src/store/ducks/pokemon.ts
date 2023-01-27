import axios from 'axios';
import { AnyAction } from 'redux';
import { split } from 'utils';

import { RootState } from '../root-reducer';

const MAX_ITEMS_PER_PAGE = 18;

// utils

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

// Action Types

export const Types = {
    FETCH_POKEMON_SUCCESS: 'pokemon/FETCH_POKEMON_SUCCESS',
    FETCH_POKEMON_FAILURE: 'pokemon/FETCH_POKEMON_FAILURE',
    POKEMON_TO_SHOW: 'pokemon/POKEMON_TO_SHOW',
    SEARCH_POKEMON: 'pokemon/SEARCH_POKEMON',
    CLEAR_TO_SHOW: 'pokemon/CLEAR_TO_SHOW',
    CLEAR_TYPE: 'pokemon/CLEAR_TYPE',
};

export type Stat = {
    base_stat: number;
    stat: {
        name: string;
    };
};

export type Type = {
    type: {
        name: string;
    };
};

export type Sprites = {
    front_default: string;
    back_default: string;
};


export type Pokemon = {
    name: string;
    weight: number;
    height: number;
    base_experience: string;
    stats: Stat[];
    types: Type[];
    sprites: Sprites;
};

// Reducer

type INITIAL_STATE_TYPES = {
    list: Pokemon[];
    type: string;
    toShow: Pokemon[];
    nextToShow: number;
    filteredList: Pokemon[];
    error: boolean;
};

const INITIAL_STATE: INITIAL_STATE_TYPES = {
    list: [],
    type: '',
    toShow: [],
    nextToShow: 0,
    filteredList: [],
    error: false,
};

const getPokemonToShow = (
    fullList: Pokemon[],
    filteredList: Pokemon[],
    toShow: Pokemon[],
    nextToShow: number
) => {
    const list = filteredList.length > 0 ? filteredList : fullList;

    if (split(list, MAX_ITEMS_PER_PAGE).length > nextToShow)
        return [...toShow, ...split(list, MAX_ITEMS_PER_PAGE)[nextToShow]];

    return toShow;
};

// Selectors

export const pokemonSelector = (state: RootState) => state.pokemon.list;
export const typeFetchSelector = (state: RootState) => state.pokemon.type;
export const pokemonFetchError = (state: RootState) => state.pokemon.error;
export const pokemonToShowSelector = (state: RootState) => state.pokemon.toShow;
export const nextPokemonSliceToShow = (state: RootState) => state.pokemon.nextToShow;
export const pokemonListSplittedSelector = (state: RootState) =>
    state.pokemon.filteredList.length > 0
        ? split(state.pokemon.filteredList, 18)
        : split(state.pokemon.list, 18);

const pokemonReducer = (state = INITIAL_STATE, action: AnyAction) => {
    switch (action.type) {
        case Types.FETCH_POKEMON_SUCCESS:
            return {
                ...state,
                list: action.payload.data.pokemon,
                type: action.payload.data.name,
                error: false,
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
                // filteredList: state.list.filter(
                //     (pokeInfo) =>
                //         pokeInfo.pokemon.name
                //             .toLowerCase()
                //             .includes(action.payload.toLowerCase()) && pokeInfo
                // ),
            };
        case Types.CLEAR_TYPE:
            return { ...INITIAL_STATE };

        case Types.FETCH_POKEMON_FAILURE:
            return { ...state, error: true };
        default:
            return state;
    }
};

// Action Creators

export const fetchPokemonSuccess = (pokeCollection: any) => ({
    type: Types.FETCH_POKEMON_SUCCESS,
    payload: pokeCollection,
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const fetchPokemonFailure = (error: Error) => ({
    type: Types.FETCH_POKEMON_FAILURE,
});

export const pokemonToShow = () => ({
    type: Types.POKEMON_TO_SHOW,
});

export const filterList = (text: string) => ({
    type: Types.SEARCH_POKEMON,
    payload: text,
});

export const clearToShow = () => ({
    type: Types.CLEAR_TO_SHOW,
});

export const clearType = () => ({
    type: Types.CLEAR_TYPE,
});

// TODO: Type dispatch

export const searchPokemon = (text: string) => {
    // TODO: Debounce might be good
    return (dispatch: any) => {
        dispatch(filterList(text));
        dispatch(clearToShow());
        dispatch(pokemonToShow());
    };
};

export const LoadMore = () => {
    return (dispatch: any) => {
        dispatch(pokemonToShow());
    };
};

export const getPokemonByIdOrName = (value: string): Promise<Pokemon> =>
    axios
        .get(`https://pokeapi.co/api/v2/pokemon/${value}`)
        .then((res) => {
            return res.data;
        })
        .catch((error) => error);

export const fetchPokemonStartAsync = (type: string) => {
    return (dispatch: any) => {
        axios
            .get(
                `https://pokeapi.co/api/v2/type/${
                    API_TYPES[type as keyof typeof API_TYPES]
                }`
            )
            .then((res) => {
                dispatch(fetchPokemonSuccess(res));
                dispatch(pokemonToShow());
            })
            .catch((error) => dispatch(fetchPokemonFailure(error)));
    };
};

export default pokemonReducer;
