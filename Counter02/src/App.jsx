import { useState } from 'react'
 
import './App.css'

function App() {
  
  let [counter,setCounter]= useState(15);

  const addval=()=>{ counter=counter+1
    setCounter(counter);
   };
  const removeval=()=>{ 
    if(counter>0){
    counter=counter-1 
    setCounter(counter);
    }
    
  };
 
  
  return (
    <>
      <h1>Increment and Decrement counter </h1>
      <h2>Counter Value:- {counter} </h2>

      <button onClick={addval}> Increment </button>
      <br></br>
      <button onClick={removeval}> Decrement </button>
    </>
  )
}

export default App
