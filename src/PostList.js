import React from 'react';
import Post from './Post';


function PostList(props) {
    return (
        <div className="postList">
            {props.posts &&
                props.posts.map(post => {
                    return <Post post={post} />
                })
            }
        </div>
    )
}

export default PostList;
