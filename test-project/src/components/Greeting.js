import React, { useState } from 'react'
import Output from './Output';

function Greeting() {
    const [changedText,setChangedText]=useState(false);
    const changeTextHandler = ()=>{
        setChangedText(true);
    }
  return (
    <div>
        <h2>hello world!</h2>
        {!changedText &&<Output>It's good to see you!</Output>}
        {changedText &&<Output>Changed!</Output>}
        <button onClick={changeTextHandler}>Change Text!</button>
    </div>
  )
}

export default Greeting