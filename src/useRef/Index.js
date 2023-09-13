import React, { useState,useEffect, useRef } from 'react'

const Index = () => {
    const [name,setName] = useState('')
   // const [counter,setCounter] = useState(0)
const counter = useRef(0)
    useEffect(()=>{
        counter.current=counter.current+1
    },)
  return (
    <div>
        <input type="text" onChange={(e)=>setName(e.target.value)} />
        <p>my name is {name}</p>
        <p>render-{counter.current}</p>
    </div>
  )
}

export default Index

// Sure, I'd be happy to explain the useRef hook in React in simple steps.

// What is useRef?

// useRef is a built-in React hook that allows you to create a reference to a DOM element or to persist a value across renders without causing the component to re-render when the value changes.
// Import useRef

// First, make sure you import the useRef hook from the React library:
// javascript
// Copy code
// import React, { useRef } from 'react';
// Creating a Ref

// To create a ref, you can call the useRef function and assign it to a variable:
// javascript
// Copy code
// const myRef = useRef();
// Using a Ref with DOM Elements

// You can attach a ref to a DOM element by passing the ref prop to that element in your JSX code:
// javascript
// Copy code
// <input ref={myRef} />
// Accessing the DOM Element

// Now, you can access the DOM element using myRef.current. For example, to focus on the input element:
// javascript
// Copy code
// myRef.current.focus();
// Using Refs to Persist Values

// Refs can also be used to persist values across renders. For instance, if you want to keep track of a variable without causing re-renders, you can do this:
// javascript
// Copy code
// const myValueRef = useRef(initialValue);
// Accessing and Updating Ref Values

// To access the value stored in the ref, use myValueRef.current. You can also update it directly without causing re-renders:
// javascript
// Copy code
// myValueRef.current = newValue;
// Common Use Cases

// Some common use cases for useRef include:
// Working with DOM elements directly (e.g., focusing an input).
// Storing and accessing mutable values without causing re-renders.
// Managing third-party libraries that require direct DOM access.
// Remember About Mutability

// Keep in mind that modifying a ref does not trigger a re-render in React, so use it for mutable values or direct DOM manipulation, but not for state management or rendering logic.
// That's a simple overview of the useRef hook in React. It's a handy tool for working with DOM elements and persisting values without causing unnecessary re-renders in your components.