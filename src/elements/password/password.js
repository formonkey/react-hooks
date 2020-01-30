import React, { useState } from 'react';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import FormControl from '@material-ui/core/FormControl';
import FilledInput from '@material-ui/core/FilledInput';
import withStyles from '@material-ui/core/styles/withStyles';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import OutlinedInput from '@material-ui/core/OutlinedInput';

import { passwordStyles } from './password.style';
import { TextField } from '@material-ui/core';

export const Password = withStyles(passwordStyles)(({ classes, error, ...props}) => {
    const [ show, setShow ] = useState(false);

    const CustomInput = props.outlined ? OutlinedInput : props.filled ? FilledInput : Input;

    return (
        <FormControl classes={{ root: classes.root }}
                     variant={ props.outlined ? 'outlined' : props.filled ? 'filled' : '' }>
            <InputLabel error={ error } htmlFor="password">
                { props.label }
            </InputLabel>
            <CustomInput
                id="password"
                type={
                    show ? 'text' : 'password'
                }
                value={ props.value }
                onChange={ props.onChange }
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={
                                () => setShow(!show)
                            }
                        >
                            {
                                show ? <Visibility /> : <VisibilityOff />
                            }
                        </IconButton>
                    </InputAdornment>
                }
                helperText={ error ? props.errorMessage : props.fieldMessage }
                error={ error }
                { ...props }
            />
        </FormControl>

    );
});
