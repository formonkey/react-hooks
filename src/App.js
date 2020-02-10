import React, { useEffect, useReducer } from 'react';

import { OAuthComponent } from './pages/o-auth';
import { userReducer, UserContext } from './core/user';

function App() {
    useEffect(() => console.log('[APP] USE EFFECT'), []);

    const [ state, dispatch ] = useReducer(userReducer, {});

    return (
        <UserContext.Provider value={{ state, dispatch }}>
            <OAuthComponent />
        </UserContext.Provider>
    );
}

export default App;
