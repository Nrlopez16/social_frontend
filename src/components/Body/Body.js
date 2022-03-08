import React, { useState, useEffect } from 'react';
import './Body.css';
import {getPosts} from '/home/nrlopez/social/src/api/index.js';


function MainBody(){
    const [posted, setPosted] = useState([]);

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
            {posted.map(({id, username, profilePic, text}) => (
                <div key={ id } className="postbody"> 
                <img className="profilePicture" src={profilePic} />
                <div className="content">
                    <h2 className="username">{username}</h2>
                    <h3 className="text">{text}</h3>
                    </div>
                </div>
            ))}
        </div>
    )
} 
export default MainBody;