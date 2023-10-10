'use client'
import React, { useState } from 'react';

export const Teller = () => {
    const [counter, setCounter] = useState(0);

    return (
        <div>
            <p>Counter: {counter}</p>
            <button onClick={() => setCounter(counter - 1)}>DecrementButton</button>
        </div>    
    );
}