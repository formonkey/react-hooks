import React from 'react';

import { OAuthProvider } from '../contexts'
import { oAuthRequests } from '../requests';

export const OAuthService = (WrappedComponent) => (props) => {
    return (
        <OAuthProvider value={ oAuthRequests }>
            <WrappedComponent
                { ...props }
            />
        </OAuthProvider>
    );
};
