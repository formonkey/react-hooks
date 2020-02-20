export const pouchDBReducer = (state, { type, payload }) => {
    if (type === 'POUCH_LOAD') {
        return {
            ...state,
            ...payload,
            isLoading: payload.status === state.status && state.status,
        };
    } else {
        return null;
    };
};