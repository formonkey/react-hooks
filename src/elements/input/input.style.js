const styledBy = (property, mapping) => (props) => mapping[props[property]];

export const inputStyles = {
    root: {
        margin: '10px 0',
        width: '100%',
        background: styledBy('background', {
            default: '#fff',
            blocked: '#efefef',
        }),
    },
    input: {
        color: styledBy('color', {
            red: 'red',
            blue: 'blue',
        }),
    },
    label: {
        color: styledBy('color', {
            red: 'red',
            blue: 'blue',
        }),
    },
};
