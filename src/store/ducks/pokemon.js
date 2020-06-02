import axios from 'axios';

// Selectors

export const pokemonSelector = (state) => state.pokemon.list;
export const typeFetchSelector = (state) => state.pokemon.type;
export const pokemonFetchError = (state) => state.pokemon.error;
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
    CLEAR_TYPE: 'pokemon/CLEAR_TYPE',
};

// Reducer

const INITIAL_STATE = {
    list: [],
    type: '',
    toShow: [],
    nextToShow: 0,
    filteredList: [],
    error: false,
};

const pokemonReducer = (state = INITIAL_STATE, action) => {
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
                filteredList: state.list.filter(
                    (pokeInfo) =>
                        pokeInfo.pokemon.name
                            .toLowerCase()
                            .includes(action.payload.toLowerCase()) && pokeInfo
                ),
            };
        case Types.CLEAR_TYPE:
            return { ...INITIAL_STATE };

        case Types.FETCH_POKEMON_FAILURE:
            return { ...state, error: true };
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

export const fetchPokemonFailure = (error) => ({
    type: Types.FETCH_POKEMON_FAILURE,
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

export const clearType = () => ({
    type: Types.CLEAR_TYPE,
});

export const searchPokemon = (text) => {
    //TODO: Debounce might be good
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

export const getPokemonByIdOrName = (value) =>
    axios
        .get(`https://pokeapi.co/api/v2/pokemon/${value}`)
        .then((res) => {
            return res.data;
        })
        .catch((error) => error);

export const fetchPokemonStartAsync = (type) => {
    return (dispatch) => {
        axios
            .get(`https://pokeapi.co/api/v2/type/${API_TYPES[type]}`)
            .then((res) => {
                dispatch(fetchPokemonSuccess(res));
                dispatch(pokemonToShow());
            })
            .catch((error) => dispatch(fetchPokemonFailure(error)));
    };
};

export default pokemonReducer;
