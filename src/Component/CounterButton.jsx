import React from 'react'

const CounterButton = ({handleChange , handleDouble}) => {
  return (<>
    <button onClick={() => handleChange(1)}>Increment</button>
    <button onClick={() => handleChange(-1)}>Decrement</button>
    <button onClick={() => handleDouble(2)}>Double</button>
  </>
  )
}

export default CounterButton