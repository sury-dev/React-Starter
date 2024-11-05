import React, { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter] = useState(0)

  function increaseCounter1() {
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1) 

    // The above code will not work as expected. It will increase the counter by 1 only. The concept of Fibre in React is used to update the state asynchronously. The setCounter function will update the state in the next render cycle. So, we can use the previous state value to update the state correctly. Here is the updated code:
  }

  function increaseCounter2() {
    setCounter((prevCounter) => {return prevCounter + 1})
    setCounter((prevCounter) => {return prevCounter + 1})
    setCounter((prevCounter) => {return prevCounter + 1})
    setCounter((prevCounter) => {return prevCounter + 1})
    setCounter((prevCounter) => {return prevCounter + 1})

    // The above code will increase the counter by 5. The setCounter function will update the state in the next render cycle. So, we can use the previous state value to update the state correctly.
  }

  return (
    <>
    <h1>Value of the counter = {counter}</h1>
    <button onClick={increaseCounter1}>Increase in batch 1 (increases one by one)</button>
    <button onClick={increaseCounter2}>Increase in batch 2 (increases by 5)</button>
    </>
  )
}

export default App
