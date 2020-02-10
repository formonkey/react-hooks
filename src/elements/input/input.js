import React from 'react';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import withStyles from '@material-ui/core/styles/withStyles';
import FormHelperText from '@material-ui/core/FormHelperText';

import { inputStyles } from './input.style';

export const Input = withStyles(inputStyles)(({ classes, background, color, ...props }) => (
    <FormControl className={ classes.root }>
        <TextField
            { ...props }
            select={ false }
            label={ props.name }
            onChange={ props.onChange }
            InputProps={{ className: classes.input }}
            InputLabelProps={{ className: classes.label }}
            variant={ props.outlined ? 'outlined' : props.filled ? 'filled' : '' }
        />
        <FormHelperText 
            id="my-helper-text" 
            error={ props.error }
        >
            { props.error ? props.errorMessage : props.fieldMessage }
        </FormHelperText>
    </FormControl>
));
