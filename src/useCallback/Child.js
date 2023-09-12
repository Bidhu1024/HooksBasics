import React,{memo} from 'react';

const Child = () => {
    console.log("im in")
    return (
        <div>
            Child
        </div>
    );
};

export default memo(Child);