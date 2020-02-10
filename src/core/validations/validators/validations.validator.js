export const Validation = {
    Required: (value) => {
        return !value ? {
            required: 'This field is required',
        } : {};
    },
    MaxLength: (length) => (value) => {
        return value.length > length ? {
            maxLength: `This field has a length exceeding ${ length }`,
        } : {};
    },
    MinLength: (length) => (value) => {
        return value.length < length ? {
            minLength: `This field has a length exceeding ${ length }`,
        } : {}
    },
    Email: (value) => {
        return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ? {
            email: 'This email is invalid'
        } : {}
    },
    Number: (value) => {
        return !+value ? {
            number: 'This value is not a number',
        } : {};
    },
};