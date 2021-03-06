import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import { navBarStyles } from './nav-bar.styles';
import { withThemeStyles } from '../../../core/withe-theme-styles';

export const NavBar = withThemeStyles(navBarStyles)(({ classes }) => (
    <div className={classes.root}>
        <AppBar position="static" className={ classes.appBar }>
            <Toolbar>
                <IconButton edge="start" className={ classes.menuButton } color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>

                <Typography variant="h6" className={ classes.title }>

                </Typography>
                <Button color="inherit">
                    Cloud
                </Button>
            </Toolbar>
        </AppBar>
    </div>
));