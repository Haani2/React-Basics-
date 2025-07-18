import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App() {

  let [Count,setcout ] = useState(0)


 const AddValue = ()=>{
  console.log("clicked");
  // Count= Count+1;
  setcout(Count+1);
 } 
 const minueval = ()=>{
  console.log("clicked");
  // Count= Count+1;
  if (Count!=0) {
     setcout(Count-1);
  }
 
 } 


// let Count=5;
  return (
    <>
       <h1>Counter: {Count}</h1>
       <button onClick={AddValue}>increase</button>
       <br/>
       <button onClick={minueval}>decrease</button>
    </>
  )
}

export default App
