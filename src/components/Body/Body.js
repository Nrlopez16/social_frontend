import React, { useState, useEffect } from 'react';
import './Body.css';
import {getPosts} from '/home/nrlopez/social/src/api/index.js';


function MainBody(){
    const [posted, setPosted] = useState([]);
    const [showComments, setShowComments] = useState(false);

    useEffect(() => {
        getPosts()
        .then(data => {
        setPosted(data);
        console.log(data);
        })
        .catch(error => {
            console.error(error);
        })
    }, []);


    return (
        <div className="homepage">
            {posted.map(({id, username, profilePic, text, comments}) => (
                <div key={ id } className="post"> 
                <div className="postbody">
                    <div className="main-body">
                <img className="profilePicture" src={profilePic} />
                <div className="content">
                    <h2 className="username">{username}</h2>
                    <h3 className="text">{text}</h3>
                    </div>
                    </div>
                <button className="comment-toggle"
                onClick={() => {setShowComments(!showComments)
                    console.log(showComments)}}> Comments </button>
                </div>
                 
                {comments.map(({id, profilePic, text, username}) => (
                    <div key={ id } className={showComments ? "comment": "comment-invis" }> 
                    <img className="propic" src={profilePic}/>
                    <div className="content">
                        <h2 className="username">{username}</h2>
                        <h3 className="text">{text}</h3>
                        </div>
                    </div>
                ))} 
                </div>
            ))}
        </div>
    )
} 
export default MainBody;