import React from 'react';
import { useState,useCallback } from 'react';
import Child from './Child';

const Parent = () => {
    const [increment, setIncrement] = useState(0)
    const [increment1, setIncrement1] = useState([])
    const handleClick = () => {
        setIncrement(increment + 1)
    }
 const fun=useCallback(()=>{
        console.log("fun")
    },[increment1])

    return (
        <div>
            <Child increment1={increment1} fun={fun} />
            <button onClick={handleClick}> increment - {increment}</button>
        </div>
    );
};

export default Parent;