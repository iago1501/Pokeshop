import React, {useState} from 'react'

import {IconButton, Badge, Menu} from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const Cart = () => {

    const [anchorEl, setAnchorEl] = useState(null);
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
            <Badge badgeContent={17} color="secondary">
                <ShoppingCartIcon />
            </Badge>
        </IconButton>
        <Menu
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
            {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>
                                My account
                            </MenuItem> */}
            {/* lista com elementos */}
        </Menu>
    </div>
)};

export default Cart
