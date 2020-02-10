import React from 'react';

import { OAuthProvider } from '../contexts'
import { oAuthRequests } from '../requests';
import { GraphQLConsumer } from '../../../core/graph-ql';

export const OAuthService = (WrappedComponent) => (props) => {
    return (
        <GraphQLConsumer>
            {
                ({ mutation }) => {
                    return (
                        <OAuthProvider value={ oAuthRequests(mutation) }>
                            <WrappedComponent
                                { ...props }
                            />
                        </OAuthProvider>
                    )
                }
            }
        </GraphQLConsumer>
    );
}