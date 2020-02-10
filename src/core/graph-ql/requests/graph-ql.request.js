import GraphQLClient from 'apollo-boost';

const GraphQL = {
    instance: null,
    query: (query, dto) => {
        if (navigator.onLine) {
            return GraphQL.instance.query({
                query,
                variables: { dto },
            }).then(GraphQL.callbackThen)
                .catch(GraphQL.callbackCatch);
        } else {
            return Promise.resolve();
        }
    },
    mutation: (mutation, dto) => {
        if (navigator.onLine) {
            return GraphQL.instance.mutate({
                mutation,
                variables: { dto },
            }).then(GraphQL.callbackThen)
                .catch(GraphQL.callbackCatch);
        } else {
            return Promise.resolve();
        }
    },
    callbackThen: (res, error) => {
        const keys = Object.keys(res.data);

        return Promise.resolve(res.data[keys[0]]);
    },
    callbackCatch: (error) => {
        return Promise.reject(error);
    },
};

const GQL = {
    init: (auth = {}) => {
        GraphQL.instance = new GraphQLClient({
            uri: process.env.REACT_APP_GRAPHQL,
            request: (operation) => {
                operation.setContext({
                    headers: {
                        authorization: auth.accessToken ? `Bearer ${ auth.accessToken }` : '',
                    },
                })
            }
        });

        return GraphQL;
    },
};

export const GraphQLRequest = GQL;