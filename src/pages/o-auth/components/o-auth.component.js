import React, { useEffect } from 'react';

import { oAuthMountEffect } from '../effects';
import { OAuthLoginComponent } from '../../../o-auth';

export const OAuthComponent = () => {
    useEffect(oAuthMountEffect(), []);

    return (
        <OAuthLoginComponent />
    )
};
