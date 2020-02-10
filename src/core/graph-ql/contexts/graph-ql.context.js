import { createContext } from 'react';

const GraphQLContext = createContext({});

export const GraphQLConsumer = GraphQLContext.Consumer;
export const GraphQLProvider = GraphQLContext.Provider;
