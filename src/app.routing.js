import React from 'react';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { UserContext } from './core/user';
import { NavBar } from './shared/nav-bar';
import { AppContext } from './app.context';
import { OAuthComponent } from './pages/o-auth';
import { Management } from './pages/managements';
import { PouchDB } from './core/pouch-db/services';

export const AppRouter = ({ state, dispatch, feedback }) => {
    console.log('APP ROUTER COMPONENT');
    
    return (
        <AppContext.Provider value={{ feedback}}>
            <UserContext.Provider value={{ state, dispatch }}>
                {
                    !state.accessToken ? <OAuthComponent /> : (
                        <PouchDB>
                            <NavBar />
                            <BrowserRouter>
                                <Switch>
                                    <Route exact path="/managements" component={ () => <Management /> }/>
                                    <Redirect from="*" to="/managements" />
                                </Switch>
                            </BrowserRouter>
                        </PouchDB>
                    )  
                }
            </UserContext.Provider>
        </AppContext.Provider>
    )
};
