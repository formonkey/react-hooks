import React, { useContext } from 'react';

import { UserContext } from '../../../core/user';
import { OAuthLoginFormComponent } from './o-auth-login-form.component';

export const OAuthLoginComponent = () => {
    const { dispatch } = useContext(UserContext);

    console.log('LOGIN');
    
    return (   
        <>
            <h2>Login form</h2>

            <OAuthLoginFormComponent dispatch={ dispatch } />
        </>
    );
}
