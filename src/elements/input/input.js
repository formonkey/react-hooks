import React from 'react';

import { TextField } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';

import { inputStyles } from './input.style';

export const Input = withStyles(inputStyles)(({ classes, background, color, ...props }) => (
    <TextField
        { ...props }
        select={ false }
        className={ classes.root }
        onChange={ props.onChange }
        InputProps={{ className: classes.input }}
        InputLabelProps={{ className: classes.label }}
        variant={ props.outlined ? 'outlined' : props.filled ? 'filled' : '' }
        helperText={ props.error ? props.errorMessage : props.fieldMessage }
    />
));
