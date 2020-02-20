export const pouchDBMountSync = (state, dispatch) => () => {
    let hasEnter = false;
    
    const callback = (status) => () => {
        console.log('POUCH STATUS', status);
        if (hasEnter) {
            dispatch({ payload: { status }, type: 'POUCH_LOAD' })
        } else {
            hasEnter = true;
        }
    };
    
    state.sync
        .on('active', callback('active'))
        .on('paused', callback('paused'))
        .on('change', state.onChange);
};