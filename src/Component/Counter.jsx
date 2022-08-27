import React, { useState } from 'react'
import CounterButton from './CounterButton'

const Counter = () => {
const [counter,setcounter] = useState(0)
const handleChange =(val)=>{

    setcounter(counter +val)
}
const handleDouble =(val)=>{

    setcounter(counter *val)
}

  return <>
  <div>
    {
        counter%2==0 ? <h1 style={{color:'green'}}>{counter}</h1>  :<h1 style={{color:'red'}}>{counter}</h1> 
    } 
  </div>
<CounterButton handleChange= {handleChange} handleDouble= {handleDouble} />
  </>
  
}

export default Counter