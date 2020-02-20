import React from 'react';
import MaterialButton from '@material-ui/core/Button'
import withStyles from '@material-ui/core/styles/withStyles';
import CircularProgress from '@material-ui/core/CircularProgress';

import { buttonStyles } from './button.style';

export const Button = withStyles(buttonStyles)(({ classes, variant = 'contained', children, loading, ...props }) => (
    <MaterialButton
        className={ classes.root }
        { ...props }
        variant={ variant }
        disabled={ props.disbled || loading } 
        disableElevation>
            {
                loading ? <CircularProgress size={ 25 } 
                                color={ variant === 'contained' ? 'primary' : props.color || props.loadingColor } 
                            /> : children
            }
    </MaterialButton>  
))