import { oAuthSignInRequest as signIn } from './o-auth-sign-in.request';

export const oAuthRequests = (mutation) => ({
    signIn: signIn(mutation),
});
