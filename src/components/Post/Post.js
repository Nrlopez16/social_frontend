import React, {useState} from 'react';
import './Post.css';


//posts should be pushed into here to create a post per each one found from api call,
//then each post will have its own id essentially to open their own comments section
//one at a time and not all together

function Post(props){
    const {key, profilePic, username, text, comments} = props;
    const [showComments, setShowComments] = useState(false);
    return <div key={ key } className="post"> 
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
}

export default Post;