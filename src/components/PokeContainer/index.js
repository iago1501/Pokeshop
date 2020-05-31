import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid} from '@material-ui/core';
import PokeCard from '../PokeCard';
import PokeballLoader from 'components/CustomUI/PokeballLoader'

import InfiniteScroll from 'react-infinite-scroll-component';

import {
    pokemonToShowSelector,
    pokemonListSplittedSelector,
    fetchPokemonStartAsync,
    nextPokemonSliceToShow,
    LoadMore,
} from 'store/ducks/pokemon.js';

import { useDispatch, useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: '10px',
        marginTop: '10vh',
    },
    progress: {
        height: '10px',
        borderRadius: '10px',
        marginTop: '30px'
    }

}));

const PokeContainer = ({ match }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const pokemonListSplitted = useSelector(pokemonListSplittedSelector);
    const pokemonToShow = useSelector(pokemonToShowSelector);
    const next = useSelector(nextPokemonSliceToShow);

    useEffect(() => {
        dispatch(fetchPokemonStartAsync(match.params.type));
    },[]);


    const onLoadMore = () => {
            dispatch(LoadMore());
      };



    return (
        !!pokemonToShow && (
            <div className={classes.root}>
                <InfiniteScroll
                    style ={{overflow: 'unset'}}
                    dataLength={pokemonToShow.length} //This is important field to render the next data
                    next={onLoadMore}
                    hasMore={next < pokemonListSplitted.length ? true : false}
                    loader={<PokeballLoader/>}
                    endMessage={<Grid container spacing={2}></Grid>}
                >
                    <Grid container spacing={2}>
                        {pokemonToShow.map(({ pokemon: { name, url } }) => (
                            <Grid key={url} item xs={12} lg={2}>
                                <PokeCard name={name} />
                            </Grid>
                        ))}
                    </Grid>
                </InfiniteScroll>
            </div>
        )
    );
};

export default PokeContainer;
