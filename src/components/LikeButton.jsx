import {useState} from 'react';
import './LikeButton.css';

const LikeButton=()=>{

    const[liked, setLiked]= useState(false);
    console.log(liked);

    const handleLike=()=>{
        setLiked(!liked);
    }


    return(
        <div className='like'>
           <h1>Like Button</h1>
           <button className='likeBtn' onClick={handleLike}>{liked? "🩷 Unlike" : "❤️ Like"}</button>
        </div>
    )
}
export default LikeButton;