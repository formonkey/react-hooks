import React, { useEffect, useMemo, useRef, useState } from 'react';

import { HelloWorldChildComponent } from './hello-world-child.component';

function usePrevious(value) {
    const ref = useRef();

    useEffect(() => {
        ref.current = value
    });

    return ref.current;
}

const helloWorldUpdateEffect = (isLoading, previousValue) => () => {
    console.log('[HELLO WORLD] USE EFFECT UPDATE', isLoading, previousValue);
};

const helloWorldMountEffect = (setIsLoading, previousValue) => () => {
    console.log('[HELLO WORLD] USE EFFECT MOUNT', !previousValue);

    setIsLoading(!previousValue);
    previousValue = !previousValue;
};

export const HelloWorldComponent = () => {
    const [ model ] = useState({ text: 'test' });
    const [ isLoading, setIsLoading ] = useState(false);

    const previousValue = usePrevious(isLoading);

    useEffect(helloWorldMountEffect(setIsLoading, previousValue), [previousValue]);
    useEffect(helloWorldUpdateEffect(isLoading, previousValue), [ isLoading, previousValue ]);

    const helloWorld = useMemo(() => <HelloWorldChildComponent model={ model }/>, [ model ]);

    return (
        <>
            {
                !isLoading ? helloWorld : <>IS LOADING</>
            }
        </>
    );
};
