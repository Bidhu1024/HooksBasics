import React from 'react';
import { useState } from 'react';
import Child from './Child';

const Parent = () => {
    const [increment, setIncrement] = useState(0)
    const [increment1, setIncrement1] = useState(0)
    const handleClick = () => {
        setIncrement(increment + 1)
    }

    return (
        <div>
            <Child increment1={increment1} />
            <button onClick={handleClick}> increment - {increment}</button>
        </div>
    );
};

export default Parent;