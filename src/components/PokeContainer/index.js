import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PokeCard from '../PokeCard';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: '10px'
    },
}));

const PokeContainer = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={12} lg={2}>
                    <PokeCard />
                </Grid>
                <Grid item xs={12} lg={2}>
                    <PokeCard />
                </Grid>
                <Grid item xs={12} lg={2}>
                    <PokeCard />
                </Grid>
                <Grid item xs={12} lg={2}>
                    <PokeCard />
                </Grid>
                <Grid item xs={12} lg={2}>
                    <PokeCard />
                </Grid>
                <Grid item xs={12} lg={2}>
                    <PokeCard />
                </Grid>
            </Grid>
        </div>
    );
};

export default PokeContainer;
