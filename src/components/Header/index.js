import React from 'react';
import {makeStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar} from '@material-ui/core';
import { PokeFontHollow } from '../CustomUI/Fonts';
import MenuSearch from '../CustomUI/MenuSearch'
import Cart from '../Cart'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menu:{
        backgroundColor: '#ab0000'
    }
}));

export default function MenuAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.menu}>
                <Toolbar>
                    <PokeFontHollow>PokéSHOP</PokeFontHollow>
                    <MenuSearch/>
                    <div className={classes.root} />
                    <Cart/>
                </Toolbar>
            </AppBar>
        </div>
    );
}
