import React from 'react';

const OAuthContext = React.createContext({});

export const OAuthConsumer = OAuthContext.Consumer;
export const OAuthProvider = OAuthContext.Provider;
