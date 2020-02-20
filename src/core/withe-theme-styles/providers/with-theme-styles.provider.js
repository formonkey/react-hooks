import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

export const withThemeStyles = (callback) => (WrappedComponent) => (props) => {
    const classes = makeStyles(callback)();
    
    return (
        <WrappedComponent classes={ classes } { ...props } />
    );
};