import React, { useReducer, useMemo } from 'react';

import { ThemeProvider } from '@material-ui/core/styles';

import { theme } from './styles';
import { userReducer } from './core/user';
import { AppRouter } from './app.routing';
import { usePersistReducer } from './core/persist-reducer';
import { snackBarReducer, SnackBarContext, SnackBarComponent } from './elements/snack-bar';


function App() {
    const [ snackState, snackDispatch ] = useReducer(snackBarReducer, {});
    const [ userState, userDispatch ] = usePersistReducer(userReducer, {}, 'auth');

    const RouterComponent = useMemo(() =>
        <AppRouter state={ userState } dispatch={ userDispatch } feedback={ snackDispatch } />, 
        [ userState, userDispatch, snackDispatch ]);

    return (
        <ThemeProvider theme={ theme }>
            <SnackBarContext.Provider value={{ state: snackState, dispatch: snackDispatch}}>
                <SnackBarComponent { ...snackState } />
                {
                    RouterComponent
                }
            </SnackBarContext.Provider>
        </ThemeProvider>
    );
}

export default App;
