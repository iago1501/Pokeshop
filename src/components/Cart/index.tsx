import { useState } from 'react';
import { useSelector } from 'react-redux';

import { IconButton, Badge, Menu, Tooltip } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import { selectCartItemsCount } from 'store/ducks/cart';
import CartContainer from '../CartContainer';

const Cart = () => {
    const [open, setOpen] = useState(false);
    const cartQuantity = useSelector(selectCartItemsCount);

    const handleMenu = () => {
        // eslint-disable-next-line no-console
        // console.log(event);
        setOpen(!open);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Tooltip title="My cart">
                <IconButton
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                >
                    <Badge badgeContent={cartQuantity} color="secondary">
                        <ShoppingCartIcon />
                    </Badge>
                </IconButton>
            </Tooltip>

            <Menu
                // anchorEl={open}
                id="menu-appbar"
                open={open}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                onClose={handleClose}
            >
                {/* <CartContainer handleClose={handleClose} /> */}
            </Menu>
        </div>
    );
};

export default Cart;
