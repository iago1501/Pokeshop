import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { IconButton, Badge, Menu } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CartContainer from '../CartContainer';
import { selectCartItemsCount } from 'store/ducks/cart';

const Cart = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const cartQuantity = useSelector(selectCartItemsCount);
    const open = Boolean(anchorEl);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
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
            <Menu
                style={{ marginTop: '50px' }}
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
            >
                <CartContainer handleClose={handleClose} />
            </Menu>
        </div>
    );
};

export default Cart;
