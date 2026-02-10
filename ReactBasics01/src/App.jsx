import { useState } from 'react'
import Sum from './sum'

function App() {
  return (
    // hear i can only return one tag in jsx so i wrap it into div or empty div called fragment 
    //one div can have many tags 
    <> 
    <h1>Inside the app function </h1>   
    <Sum/>
    </>
      
  )
};

export default App
