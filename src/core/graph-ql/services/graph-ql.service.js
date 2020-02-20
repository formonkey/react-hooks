import React, { useContext as context, useMemo as memo } from 'react';

import { UserContext } from '../../user';
import { GraphQLRequest } from '../requests/graph-ql.request';
import { GraphQLProvider } from '../contexts/graph-ql.context';
import { SnackBarContext } from '../../../elements/snack-bar';

export const GraphQLService = (WrappedComponent, key = '') => (props) => {
    const { state } = context(UserContext);
    const { dispatch } = context(SnackBarContext);

    const MemoWrappedComponent = memo(() => <WrappedComponent { ...props } />, [ props[key] ]);

    return (
        <GraphQLProvider value={ GraphQLRequest.init(state, dispatch) }>
            { MemoWrappedComponent }
        </GraphQLProvider>
    );
};