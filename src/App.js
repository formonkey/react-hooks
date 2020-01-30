import React, { useEffect } from 'react';

import { OAuthComponent } from './pages/o-auth';

function App() {
    useEffect(() => {
        console.log('[APP] USE EFFECT');
    }, []);

    return (
        <OAuthComponent />
    );
}

export default App;
