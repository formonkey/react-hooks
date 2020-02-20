import React, { useContext } from 'react';

import { PouchDBContext } from '../../../core/pouch-db/contexts';

export const ManagementComponent = () => {
    const { getData } = useContext(PouchDBContext);
    
    console.log('[TEST POUCH MANAGEMENT]');
    
    getData('managements').subscribe((data) => console.log('GET DATA MANAGEMENTS', data));

    return (
        <>
            <h1>Management</h1>
        </>
    );
};