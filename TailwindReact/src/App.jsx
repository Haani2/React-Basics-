import { useState } from 'react'
import './App.css'
import Card from './Card'; 

function App() {
  const [count, setCount] = useState(0)
  let myobj = {
    username:"Utkarsh",
    age:21
  }
  let newarr =[1,2,3]

  return (
    <>
      <h1>Krity</h1>
      <Card username="Haani" btnText="click me" />
    </>
  )
}

export default App
