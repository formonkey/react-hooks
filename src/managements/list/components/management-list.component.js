import React, { useContext, useState, useEffect } from 'react';

import StarIcon from '@material-ui/icons/Star';
import PhoneIcon from '@material-ui/icons/Phone';

import { List } from '../../../shared/list';
import { MANAGEMENT_FILTERS } from '../constants';
import { PouchDBContext } from '../../../core/pouch-db/contexts';

export const ManagementListComponent = () => {
    const { getData } = useContext(PouchDBContext);
    const [ data, setData ] = useState([]);

    useEffect(() => { getData('managements').subscribe(setData) }, [ getData, setData ]);
    
    return (
        <List
            icon="type"
            title="name"
            data={ data }
            type="managements"
            subtitle="address"
            lastDate="expireAt"
            iconLabel="typeText"
            firstDate="transferAt"
            filters={ MANAGEMENT_FILTERS }
            onClick={() => console.log('MANAGEMENT LIST ON CLICK')}
            swipeLeft={{
                content: <PhoneIcon />,
                action: (e) => console.log('swipe left', e),
            }}
            swipeRight={{
                content: <StarIcon />,
                action: (e) => console.log('swipe right', e),
            }}
        />
    );
};