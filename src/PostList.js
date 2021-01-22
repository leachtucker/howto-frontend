import React from 'react';

import Post from './Post';

function PostList(props) {
    return (
        <>
            {props.posts &&
                props.posts.map(post => {
                    return <Post key={post.id} post={post} />
                })
            }
        </>
    )
}

export default PostList;
