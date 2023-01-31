import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import PikachuBalloon from 'components/CustomUI/PikachuBalloon';
import { useStarred } from 'hooks/useStarred';

import { Helmet } from 'react-helmet';
import PokeCard from '../../components/Pokemon/PokeCard';

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        margin: '2rem',
        marginTop: '5rem',
    },
    content: {
        minHeight: '65vh',
    },
    paragraph: {
        textAlign: 'center',
    },
}));

export const PokeStarred = () => {
    const classes = useStyles();
    const { starred } = useStarred();

    return starred.length > 0 ? (
        <div className={classes.root}>
            <Helmet>
                <title>PokéShop - Starred</title>
                <meta
                    name="description"
                    content="PokéBag, your starred pokemons walk together with you"
                />
            </Helmet>
            <Grid container spacing={0}>
                <Grid item xs={12}>
                    <h2>My Starred List</h2>
                </Grid>
                <Grid container xs={12} spacing={3} className={classes.content}>
                    {starred.map(({ name, id, type }) => (
                        <Grid key={id} item xs={12} lg={4} md={4} sm={6}>
                            <PokeCard name={name} type={type} />
                        </Grid>
                    ))}
                </Grid>
                <Grid item xs={12}>
                    <p className={classes.paragraph}>
                        You cant carry more than 6 Pokémons with you, thats the
                        rule
                    </p>
                </Grid>
            </Grid>
        </div>
    ) : (
        <PikachuBalloon text="You have no starred Pokemons yet =(" />
    );
};
