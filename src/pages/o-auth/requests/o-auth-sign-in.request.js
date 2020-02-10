import { gql } from 'apollo-boost';

const AuthSignInGQL = gql`
    mutation SignIn($dto: OAuthSignInInput!) {
        signIn(dto: $dto) {
            accessToken
            refreshToken
            userName
            userKey
        }
    }
`;

export const oAuthSignInRequest = (mutation) => (dto) => mutation(AuthSignInGQL, dto);
