import React from 'react';

import { withForm } from '../../../core';
import { OAUTH_LOGIN_FORM } from '../constants';
import { OAuthConsumer } from '../../../pages/o-auth';
import { Input, Password, Button } from './../../../elements';

export const OAuthLoginFormComponent = withForm(OAUTH_LOGIN_FORM)(
    ({ form, validators, loading, handleChange, onSubmit, dispatch }) => (
        <OAuthConsumer>
            {
                ({ signIn }) => (
                    <form noValidate autoComplete="off">
                        <Input
                            value={ form.enrollment }
                            error={ validators.enrollment.hasError }
                            errorMessage={ validators.enrollment.message }
                            outlined
                            name="enrollment" 
                            onChange={ handleChange }
                        />

                        <Password
                            outlined
                            value={ form.password }
                            error={ validators.password.hasError }
                            errorMessage={ validators.password.message }
                            name="password"
                            onChange={ handleChange }
                        />

                        <Button
                            loading={ loading }
                            color="primary"
                            onClick={ onSubmit(signIn, (payload) => dispatch({ payload, type: 'LOGIN' })) } 
                        >
                            SIGN IN
                        </Button>
                    </form>
                )
            }
        </OAuthConsumer>
    ));
