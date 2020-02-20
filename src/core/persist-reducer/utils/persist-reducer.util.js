import { useEffect, useReducer } from 'react';

const createStorage = (provider) => ({
    get(key, initialState) {
        const json = provider.getItem(key);

        return json === null 
            ? typeof initialState === 'function' 
                ? initialState() 
                : initialState
            : JSON.parse(json);
    },
    set(key, value) {
        provider.setItem(key, JSON.stringify(value));
    },
});

const usePersistedReducer = (reducer, initialState, key, storage, attr) => {
    const [state, dispatch] = useReducer(reducer, storage.get(key, initialState)[attr] || storage.get(key, initialState));

    const currentState = storage.get(key);

    useEffect(() =>
        storage.set(key, attr ? { ...currentState, [attr]: state } : { ...currentState, ...state }), 
            [ key, storage, state, attr, currentState ]);

    return [state, dispatch];
};

export const peristReducer = (key = 'persist:reducer', provider = localStorage) => {
    if (provider) {
        const storage = createStorage(provider);
      
        return (reducer, initialState, attr) => usePersistedReducer(reducer, initialState, key, storage, attr);
    }

    return useReducer;
};