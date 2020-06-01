import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { IconButton, Badge, Menu, Tooltip } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CartContainer from '../CartContainer';
import { selectCartItemsCount } from 'store/ducks/cart';

const Cart = () => {
    const [open, setOpen] = useState(false);
    const cartQuantity = useSelector(selectCartItemsCount);

    const handleMenu = (event) => {
        setOpen(!!event.currentTarget);
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
                anchorEl={open}
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
                <CartContainer handleClose={handleClose} />
            </Menu>
        </div>
    );
};

export default Cart;
