import { useContext } from 'react';

import { PouchDBContext } from '../contexts';

export const usePouchDb = () => {
    return useContext(PouchDBContext);
};