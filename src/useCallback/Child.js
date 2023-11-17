import React,{memo} from 'react';

const Child = ({increment1,fun}) => {
    console.log("im in")
    return (
        <div>
            Child
        </div>
    );
};

export default memo(Child);