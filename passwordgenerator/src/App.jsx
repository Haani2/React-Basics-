import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  
const [length,setlength]=useState(8);
const [numYes,setnum] =useState(false);
const [charYes,setchar]=useState(false);
const [password,setpassword] =useState("");

const passwordref= useRef(null);


const passwordGenrator= useCallback(()=>{
  let pass=""
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
   if(numYes) str+="0123456789";
   if(charYes) str+="!@#$%^&*";

  for (let i = 1; i<=length; i++) {

   let char=Math.floor(Math.random()*str.length+1)
   pass+=str.charAt(char);

  }
  setpassword(pass);6

},[length,numYes,charYes,setpassword])

const copytoclipboard=useCallback(()=>{
  window.navigator.clipboard.writeText(password);
},[password])

useEffect(()=>{passwordGenrator()},[length,numYes,charYes,passwordGenrator])



  return (
    <>
      <div> 
  password Genrator
  <div >
    <input type="text" value={password} placeholder="password" readOnly ref={passwordref} />
    <button onClick={copytoclipboard()}>copy</button>
  </div>

  <div>
    <div>
      <input type="range" min={8} max={15} value={length} onChange={(e)=>{setlength(e.target.value)}}/>
      <label>length:{length}</label>
    </div>
    <div><input type="checkbox" defaultChecked={numYes} onChange={()=>{ setnum(prev => !prev) }} />
    <label>Include Number</label></div>

    <div><input type="checkbox" defaultChecked={charYes} onChange={()=>{setchar(prev=>!prev)}} />
    <label>Include charater</label></div>
  </div>
  </div>
    </>
  )
}

export default App
