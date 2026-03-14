import { useEffect } from "react";
import { useState } from "react"


function App() {
  const [isonline,setisonline]=useState(navigator.onLine);
  
  useEffect(()=>{
    const handleonline=()=>setisonline(true);
    const handleoffline=()=>setisonline(false);

    window.addEventListener("online",handleonline);
    window.addEventListener("offline",handleoffline);
       
    return ()=>{
     window.removeEventListener("online",handleonline);
     window.removeEventListener("offline",handleoffline);
    }

  },[])

  useEffect(()=>{
    document.title=isonline?"is online":"is offline";
  },[isonline])

  return (
     <>
     <h1> Tells device status </h1>
       <h2>{isonline?"is online ":"is offline"}</h2>
       
     </>
  )
}

export default App
