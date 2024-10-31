import { useState } from 'react'

function App() {
  const [input,setInput] = useState();

  return (
    <>
      
        <input placeholder='type...' onChange={(e)=>{setInput(e.target.value)}}></input>
       <h1>{input}</h1>
    </>
  )
}

export default App
