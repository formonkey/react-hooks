import { createContext } from 'react';

const OAuthContext = createContext({});

export const OAuthConsumer = OAuthContext.Consumer;
export const OAuthProvider = OAuthContext.Provider;
