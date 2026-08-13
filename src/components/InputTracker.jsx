import { useState } from "react";
import './InputTracker.css'

const InputTracker=()=>{

    const[name, setName]=useState("");

    return(
        <div className='tracker'>
          <h1>InputTracker</h1>
          <input className="track" type="text" placeholder="Enter your name" value={name} onChange={(e)=> setName(e.target.value)}/>
          <p className="para">Hello {name}</p>
        </div>
    )
}
export default InputTracker;