import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Tooltip } from '@material-ui/core';
import { typeFetchSelector, searchPokemon } from 'store/ducks/pokemon';
import { useSelector, useDispatch } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { withRouter } from 'react-router';
import HomeIcon from '@material-ui/icons/Home';
import { useState, useEffect } from 'react';
import MenuSearch from '../CustomUI/MenuSearch';
import Cart from './Cart';
import Starred from './Starred';
import { MENU_COLORS } from './data';
import { CustomPokeFont } from './styles';

const useStyles = (type: string) =>
    makeStyles({
        root: {
            flexGrow: 1,
        },
        menu: {
            backgroundColor: MENU_COLORS[type as keyof typeof MENU_COLORS]
                ? MENU_COLORS[type as keyof typeof MENU_COLORS]
                : '#000000',
            top: '0px',
        },
    });

// ao renderizar a página direto de detalhes, o menu não exibe a cor correta

const MenuAppBar = ({ history, match }: RouteComponentProps) => {
    const type = useSelector(typeFetchSelector);
    const typeshop = history.location.pathname.split('/')[1];
    const [searchText, setSearchText] = useState('');

    const classes = useStyles(typeshop)();
    const dispatch = useDispatch();

    function handleSearchText(
        e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ): void {
        const newValue = e.target.value;
        setSearchText(newValue);
    }

    useEffect(() => {
        dispatch(searchPokemon(searchText));
    }, [searchText]);

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
                                    : history.push(`${match.url}${type}`)
                            }
                        >
                            Poké{type === typeshop ? type : ''} SHOP
                        </CustomPokeFont>
                    </Tooltip>

                    {type && (
                        <MenuSearch onChange={(e) => handleSearchText(e)} />
                    )}
                    <div className={classes.root} />
                    <Starred />
                    <Cart />
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default withRouter(MenuAppBar);
