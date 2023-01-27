import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Hidden } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { removePokemon, addPokemon, clearPokemon } from 'store/ducks/cart';
import { PressStart2P } from '../CustomUI/Fonts';

const useStyles = makeStyles(() => ({
    item: {
        alignItems: 'center',
    },
    value: {
        textTransform: 'capitalize',
        padding: '10px',
        fontSize: '18px',
    },
    quantity: {
        display: 'flex',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    actionIcon: {
        padding: '10px',
        border: '2px solid #fff',
        alignSelf: 'center',
        '&:hover': {
            backgroundColor: 'rgba(255,255,255,0.2)',
            cursor: 'pointer',
        },
    },
}));

const CheckoutItem = ({ pokemon }) => {
    const dispatch = useDispatch();
    const { name, sprites, quantity, price, id } = pokemon;
    const totalItem = (price * quantity).toFixed(2);
    const classes = useStyles();

    return (
        <Grid container md={12} xs={12} className={classes.item}>
            <Grid item md={3} xs={12}>
                <img alt="pokemon sprite" src={sprites.front_default} />
            </Grid>
            <Grid item md={3} xs={12}>
                <p className={classes.value}>{name}</p>
            </Grid>
            <Grid item md={2} xs={12} className={classes.quantity}>
                <div
                    className={classes.actionIcon}
                    onClick={() => dispatch(removePokemon(pokemon))}
                >
                    <PressStart2P>-</PressStart2P>
                </div>
                <p className={classes.value}>{quantity}</p>
                <div
                    className={classes.actionIcon}
                    onClick={() => dispatch(addPokemon(pokemon, price))}
                >
                    <PressStart2P>+</PressStart2P>
                </div>
            </Grid>
            <Grid item md={3} xs={12}>
                <p className={classes.value}>
                    R$ {price} x {quantity} = {totalItem}
                </p>
            </Grid>
            <Hidden only="xs">
                <Grid
                    item
                    md={1}
                    xs="none"
                    onClick={() => dispatch(clearPokemon(id))}
                >
                    <PressStart2P className={classes.actionIcon}>
                        &#10005;
                    </PressStart2P>
                </Grid>
            </Hidden>
        </Grid>
    );
};

export default CheckoutItem;
