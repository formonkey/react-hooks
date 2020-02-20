import React, { useState, useContext } from 'react';
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';

import { withStyles } from '@material-ui/core';
import { SnackBarContext } from '../contexts';

export const SnackBarComponent = withStyles({ root: { width: '100%', position: 'absolute', top: '-10px' }})(({ classes, visible, title, severity, ...data }) => {
    const vertical = 'top';
    const horizontal = 'center';

    const { dispatch } = useContext(SnackBarContext);

    if (visible) {
        setTimeout(() => {
            dispatch({});
        }, 6000);
    }

    return (
        <>
            <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                key={`${vertical},${horizontal}`}
                open={ visible }
            >
                <MuiAlert 
                    className={ classes.root }
                    variant="filled" 
                    onClose={ () => dispatch({}) } 
                    severity={ severity }
                >
                    { title }
                </MuiAlert>
            </Snackbar>
        </>
    )
});