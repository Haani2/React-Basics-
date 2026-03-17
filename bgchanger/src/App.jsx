import { useState } from 'react'

function App() {
  const [color, setColor] = useState("red");
  
  function setColors(setcolor){
    <div  style={{background:setColor, height:"1000vh" , width:"250vh"}}></div>

  }

  return (
    <>
      <div  style={{background:color, height:"100vh" , width:"250vh"}}>
        <button onClick={()=>{setColor("green")}} style={{background:"lightGreen",height:"4vh",width:"15vh"}}>green</button>
        <br></br>
         <button onClick={()=>{setColor("red")}} style={{background:"red",height:"4vh",width:"15vh"}}>red </button>
         <br></br>
         <button onClick={()=>{setColor("yellow")}} style={{background:"yellow",height:"4vh",width:"15vh"}}>yellow </button>
      </div>
     
    </>
  )
}

export default App
