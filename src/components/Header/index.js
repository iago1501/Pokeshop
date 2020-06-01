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
import styled from 'styled-components';

export const CustomPokeFont = styled(PokeFontHollow)`
    cursor: pointer;
    margin-left: 50px;
    @media (max-width: 700px) {
        font-size: 15px;
        white-space: nowrap;
        margin-left: 10px;
        margin-right: 10px;
    }
`;

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
    const typeshop = history.location.pathname.split('/')[1];

    const classes = useStyles(typeshop)();
    const dispatch = useDispatch();

    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.menu}>
                <Toolbar>
                    <Tooltip title="Back to Pokemon Type Selector">
                        <HomeIcon
                            style={{ cursor: 'pointer' }}
                            onClick={() => history.push(`${match.url}`)}
                        />
                    </Tooltip>

                    <Tooltip
                        title={`Back to ${type !== '' ? type : ''}shop page`}
                    >
                        <CustomPokeFont
                            onClick={() =>
                                type === ''
                                    ? history.push(`${match.url}`)
                                    : history.push(`${match.url}${type}/shop`)
                            }
                        >
                            Poké{type === typeshop ? type : ''} SHOP
                        </CustomPokeFont>
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
