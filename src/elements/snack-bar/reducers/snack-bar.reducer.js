export const snackBarReducer = (state, { type, payload }) => {
    switch (type) {
        case 'SNACK_ON':
            return { ...payload, visible: true };
        default:
            return { ...state, visible: false };
    };
};