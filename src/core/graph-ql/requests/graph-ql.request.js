import GraphQLClient from 'apollo-boost';

const GraphQL = {
    instance: null,
    feedback: null,
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
    callbackCatch: (res) => {
        const errors = res.graphQLErrors.map((error) => error.message);

        GraphQL.feedback({ title: errors[0] });

        return Promise.reject(errors);
    },
};

const GQL = {
    init: (auth = {}, feedback) => {
        GraphQL.feedback = (data) => feedback({ type: 'SNACK_ON', payload: { ...data, visible: true, severity: 'error' }});

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