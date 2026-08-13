import { useState } from 'react';
import './ShowHide.css';

const ShowHide = () => {

    const [show, setShow] = useState(false);
    console.log("show:", show);


    const handleClick = () => {
        console.log("Button Clicked");

        setShow(!show);
    }

    return (
        <div className='showhide'>
            <h1>ShowHide</h1>
            <button className='showbtn' onClick={handleClick}>{show ? "hide" : "show"}</button>
            <p className='showtxt'>{show ? "Hi" : " "}</p>
        </div>
    )
}
export default ShowHide;