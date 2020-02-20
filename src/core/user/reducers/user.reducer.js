export const userReducer = (state, { type, payload }) => {
    switch (type) {
        case 'LOGIN':
            return payload;
        case 'LOGOUT':
            return {};
        default:
            return state;
    };
};