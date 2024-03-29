import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import PokeballLoader from 'components/CustomUI/PokeballLoader';
import PikachuBalloon from 'components/CustomUI/PikachuBalloon';

import { Helmet } from 'react-helmet';

import InfiniteScroll from 'react-infinite-scroll-component';

import {
    pokemonToShowSelector,
    pokemonListSplittedSelector,
    nextPokemonSliceToShow,
    LoadMore,
    typeFetchSelector,
    pokemonFetchError,
} from 'store/ducks/pokemon';

import { useDispatch, useSelector } from 'react-redux';
import PokeCard from '../../components/Pokemon/PokeCard';

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        margin: '10px',
        marginTop: '80px',
    },
    progress: {
        height: '10px',
        borderRadius: '10px',
        marginTop: '30px',
    },
}));

export const PokeSearch = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const pokemonListSplitted = useSelector(pokemonListSplittedSelector);
    const pokemonToShow = useSelector(pokemonToShowSelector);
    const next = useSelector(nextPokemonSliceToShow);
    const type = useSelector(typeFetchSelector);
    const error = useSelector(pokemonFetchError);

    const onLoadMore = () => {
        dispatch(LoadMore());
    };

    if (error === true) {
        return <PikachuBalloon text="Someting went wrong on fetch =(" />;
    }

    return (
        <div className={classes.root}>
            <Helmet>
                <title>PokéShop - Poké{type} Shop</title>
                <meta
                    name="description"
                    content={`Poké${type} Shop, to find your ideal ${type} type Pokémon`}
                />
            </Helmet>
            <InfiniteScroll
                style={{ overflow: 'unset' }}
                dataLength={pokemonToShow.length} // This is an important field to render the next data
                next={onLoadMore}
                hasMore={next < pokemonListSplitted.length}
                loader={<PokeballLoader />}
                endMessage={<Grid container spacing={2} />}
            >
                <Grid container spacing={2}>
                    {pokemonToShow.map(({ pokemon: { name, url } }) => (
                        <Grid key={url} item xs={12} lg={2} md={3} sm={4}>
                            <PokeCard name={name} type={type} />
                        </Grid>
                    ))}
                </Grid>
            </InfiniteScroll>
        </div>
    );
};
