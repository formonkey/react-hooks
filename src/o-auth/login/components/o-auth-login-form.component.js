import React from 'react';

import { Input, Password } from './../../../elements';

export const OAuthLoginFormComponent = () => {
    return (

        <form className noValidate autoComplete="off">
            <div>
                <Input error label="Username" outlined/>
                <Password error label="Password" outlined/>
            </div>
        </form>
    );
};

