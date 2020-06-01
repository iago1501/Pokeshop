import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Hidden } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { cartSelector, selectCartTotal, clearCart } from 'store/ducks/cart';
import CheckoutItem from '../CheckoutItem';
import { StripeCheckoutButton } from '../CustomUI/Button';
import { withRouter } from 'react-router';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: '15vh 10vw',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: 'white',
        border: '6px solid #fff',
        backgroundColor: '#212529',
    },
    externalGrid: {
        backgroundColor: '#212529',
    },
    header: {
        padding: '10px',
        borderBottom: '1px solid #ffffff2b',
    },
    footer: {
        padding: '10px',
        textAlign: 'right',
        borderTop: '1px solid #ffffff2b',
        fontSize: '20px',
    },
    stripeButton: {
        textAlign: 'center',
        marginTop: '10px',
    },
}));

const CheckoutContainer = ({ history, match }) => {
    const classes = useStyles();
    const cart = useSelector(cartSelector);
    const total = useSelector(selectCartTotal).toFixed(2);
    const dispatch = useDispatch();

    const onToken = (token) => {
        dispatch(clearCart());
        history.push(`${match.url}/success`);
    };

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item md={12} className={classes.externalGrid}>
                    <Paper className={classes.paper}>
                        <Hidden only="xs">
                            <Grid container md={12} className={classes.header}>
                                <Grid item md={3} display={{ xs: 'none' }}>
                                    Pokémon
                                </Grid>
                                <Grid item md={3}>
                                    Name
                                </Grid>
                                <Grid item md={2}>
                                    Quantity
                                </Grid>
                                <Grid item md={3}>
                                    Price
                                </Grid>
                                <Grid item md={1}>
                                    Remove
                                </Grid>
                            </Grid>
                        </Hidden>
                        {cart.length > 0 ? (
                            cart.map((pokemon) => (
                                <CheckoutItem pokemon={pokemon} />
                            ))
                        ) : (
                            <p>Your cart is empty =/</p>
                        )}
                        <Grid container md={12} className={classes.footer}>
                            <Grid item md={12}>
                                Total: R$ {total}
                            </Grid>
                            <Grid item md={12} className={classes.stripeButton}>
                                {cart.length > 0 && (
                                    <StripeCheckoutButton
                                        price={total}
                                        onToken={onToken}
                                    />
                                )}
                                {cart.length > 0 && (
                                    <div
                                        style={{
                                            color: 'red',
                                            fontSize: '12px',
                                            margin: '10px',
                                        }}
                                    >
                                        *Please use the following test credit
                                        card for payments
                                        <br />
                                        4242 4242 4242 4242 - Exp: 01/21 -
                                        CVV:123
                                    </div>
                                )}
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
};

export default withRouter(CheckoutContainer);
