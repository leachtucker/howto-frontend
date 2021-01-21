import React from 'react';

import Post from './Post';

function PostList(props) {
    return (
        <>
            {props.posts &&
                props.posts.map(post => {
                    return <Post post={post} />
                })
            }
        </>
    )
}

export default PostList;
