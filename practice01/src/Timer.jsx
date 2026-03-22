import { useState,useEffect } from "react";

 function Timer() {
  const [time, setTime] = useState(new Date());
  
useEffect(()=>{

const timer = setInterval(()=>{
  setTime(new Date());
},1000)

return (()=>{
clearInterval(timer)
}) 

  },[])
   
   
  return(
  <>

   <h1>Clock time</h1>

   <h1>Time: {time.toLocaleDateString()}</h1>
   
  </>
  )
}
export default Timer;