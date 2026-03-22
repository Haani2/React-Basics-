import { useEffect, useState } from "react";
import "./index.css"

function JokeFetcher(){
 const [joke,setjoke]=useState("Lodding...");
//  const jokes = ["haha", "hi" , "hiee babiee"];

 useEffect(()=>{
  fetch();
 },[])
//  function handleJokes()
//  {
//     let randomJoke=Math.floor(Math.random()*jokes.length);
//     let picked=jokes[randomJoke];
//     setjoke(picked);
    
//  }
function fetchJoke(){
 fetch("https://v2.jokeapi.dev/joke/Programming?type=single")
  .then(Response=> Response.json())
  .then(data=>{
    setjoke(data.joke)
  })
}

return(
  <div className="container">
<div id="jokeDisplay" className="box">
     <p>
    {joke}
    </p>
    <button className="button" onClick={fetchJoke}> Get Joke</button>
   </div>
   </div>
   )
}

export default JokeFetcher;