import React, { useContext as context, useEffect, useReducer } from 'react';

import { pouchDBReducer } from '../reducers';
import { PouchDBContext } from '../contexts';
import { pouchDBInstance } from '../instance';
import { UserContext } from '../../user/contexts';
import { pouchDBMountSync } from '../effects/pouch-db.mount';

export const PouchDB = ({ children }) => {
    const { state: userState } = context(UserContext);
    const [ state, dispatch ] = useReducer(pouchDBReducer, pouchDBInstance.init(userState));

    useEffect(pouchDBMountSync(state, dispatch), []);
    
    return (
        <PouchDBContext.Provider value={{
            getData: state.getData, 
            putData: state.instance.put,
            setData: state.instance.post,
            removeData: state.instance.remove,
        }}>
            {
                state.isLoading ? 'loading' : (
                    <div className="content" style={{ height: '100%', minHeight: '100%', background: '#fafafa'}}>
                        { children }
                    </div>
                )
            }
        </PouchDBContext.Provider>
    );
};