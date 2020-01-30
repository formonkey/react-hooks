import React, { useEffect } from 'react';

const helloWorldChildMountEffect = () => console.log('[HELLO WORLD CHILD] USE EFFECT MOUNT');
const helloWorldChildUnMountEffect = () => console.log('[HELLO WORLD CHILD] USE EFFECT UN MOUNT');

const HelloWorldChildTmpl = ({ text }) => (
    <h1>Hello world { text }!</h1>
);

export const HelloWorldChildComponent = ({ model: { text }}) => {
    useEffect(helloWorldChildMountEffect, []);
    useEffect(() => helloWorldChildUnMountEffect);

    return (
        <HelloWorldChildTmpl text={ text } />
    );
};
