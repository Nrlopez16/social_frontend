import React, { useState, useEffect } from 'react';
import './Body.css';
import {getPosts} from '/home/nrlopez/social/src/api/index.js';
import Post from '../Post/Post'


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
            {posted.map(({id, username, profilePic, text, comments}) => (
                <Post key={id} username={username} profilePic={profilePic}
                text={text} comments={comments} />
            ))}
        </div>
    )
} 
export default MainBody;