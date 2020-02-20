import React from 'react';

import { Route, Switch } from 'react-router-dom';

import { ManagementListComponent } from '../../managements/list/components';

export const Management = () => (
    <>
        <Switch>
            <Route exact path="/managements" component={ () => <ManagementListComponent /> }/>
        </Switch>
    </>
);