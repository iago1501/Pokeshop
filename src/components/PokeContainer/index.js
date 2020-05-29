import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PokeCard from '../PokeCard';
import {pokemonSelector, fetchPokemonStartAsync} from 'store/ducks/pokemon.js'


import {useDispatch, useSelector} from 'react-redux'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: '10px',
        marginTop: '10vh',
    },
}));

const PokeContainer = () => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const pokemonList = useSelector(pokemonSelector)
    return (
        <div className={classes.root}>
            <button onClick={() => dispatch(fetchPokemonStartAsync())}>Fetch</button>
            <Grid container spacing={2}>
                {pokemonList.map(({pokemon: {name, url}})=>
                <Grid key={url} item xs={12} lg={2}>
                    <PokeCard name={name}/>
                </Grid>
                )}

            </Grid>
        </div>
    );
};

export default PokeContainer;
