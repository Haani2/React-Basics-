import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'


let user="haani"
const element=(
    <h1> hiee {user}</h1> // use curly bracket to use variables
)

//this is how we can create customize elements
const customeElemnt = React.createElement(
    'a',
    {href:'https://google.com'},
    "Now click hear to vist Google"
)

createRoot(document.getElementById('root')).render(
    
    //  customeElemnt
    // element
    // <App /> 
)
