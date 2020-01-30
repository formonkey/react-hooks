import React from 'react';

import { OAuthConsumer } from '../../../pages/o-auth/contexts';
import { OAuthLoginFormComponent } from './o-auth-login-form.component';

export const OAuthLoginComponent = () => {
    return (
        <OAuthConsumer>
            {
                (service) => (
                    <>
                        <h2 onClick={ service.signIn }>Login form</h2>

                        <OAuthLoginFormComponent />
                    </>
                )
            }
        </OAuthConsumer>
    );
};
