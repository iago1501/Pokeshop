import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar } from '@material-ui/core';
import { PokeFontHollow } from '../CustomUI/Fonts';
import MenuSearch from '../CustomUI/MenuSearch';
import { typeFetchSelector, searchPokemon } from 'store/ducks/pokemon';
import { useSelector, useDispatch } from 'react-redux';
import Cart from '../Cart';
import {MENU_COLORS} from './data'



const useStyles = type => makeStyles({
    root: {
        flexGrow: 1,
    },
    menu: {
        backgroundColor: MENU_COLORS[type] ? MENU_COLORS[type] : '#000000',
        top: '0px',
    },
});

const MenuAppBar = ({history}) => {
    const type = useSelector(typeFetchSelector)
    const classes = useStyles(type)();
    const dispatch = useDispatch()
    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.menu}>
                <Toolbar>
                    <PokeFontHollow>Poké{type} SHOP</PokeFontHollow>
                    {type && <MenuSearch onChange = {(e) => dispatch(searchPokemon(e.target.value))} />}
                    <div className={classes.root} />
                    {type && <Cart />}
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default MenuAppBar;
