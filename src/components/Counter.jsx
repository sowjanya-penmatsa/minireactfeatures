import React from 'react';
import { useState } from 'react';
import './Counter.css';


const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div className='counter'>
            <h1 className='counter-title'>Counter</h1>         
            <button className='counter-button' onClick={() => setCount(count - 1)}>-</button>
            <button className='counter-button' onClick={() => setCount(0)}>Reset</button>
            <button className='counter-button' onClick={() => setCount(count + 1)}>+</button>
            <p className='counter-value'>count:  {count}</p>
        </div>
    )
}
export default Counter;