import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Tooltip } from '@material-ui/core';
import { PokeFontHollow } from '../CustomUI/Fonts';
import MenuSearch from '../CustomUI/MenuSearch';
import { typeFetchSelector, searchPokemon } from 'store/ducks/pokemon';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router';
import Cart from '../Cart';
import HomeIcon from '@material-ui/icons/Home';
import { MENU_COLORS } from './data';

const useStyles = (type) =>
    makeStyles({
        root: {
            flexGrow: 1,
        },
        menu: {
            backgroundColor: MENU_COLORS[type] ? MENU_COLORS[type] : '#000000',
            top: '0px',
        },
    });

//ao renderizar a página direto de detalhes, o menu não exibe a cor correta

const MenuAppBar = ({ history, match }) => {
    const type = useSelector(typeFetchSelector);
    const classes = useStyles(type)();
    const dispatch = useDispatch();

    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.menu}>
                <Toolbar>
                    <Tooltip title="Back to Pokemon Type Selector">
                        <HomeIcon style={{ cursor: 'pointer'}} onClick={() => history.push(`/`)} />
                    </Tooltip>

                    <Tooltip title="Back to shop page">
                        <PokeFontHollow
                            style={{ cursor: 'pointer', marginLeft: '50px'}}
                            onClick={() => type === '' ? history.push('/') : history.push(`/${type}/shop`)}
                        >
                            Poké{type} SHOP
                        </PokeFontHollow>
                    </Tooltip>

                    {type && (
                        <MenuSearch
                            onChange={(e) =>
                                dispatch(searchPokemon(e.target.value))
                            }
                        />
                    )}
                    <div className={classes.root} />
                    <Cart />
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default withRouter(MenuAppBar);
