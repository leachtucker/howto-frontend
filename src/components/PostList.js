import React from 'react';

import Post from './Post';

// Filters an array of steps and reutrn
function filterSteps(array, post_id) {
    return array.filter(step => step.post_id === post_id);
}

function PostList(props) {
    return (
        <>
            {props.posts &&
                props.posts.map(post => {
                    return <Post key={post.post_id} post={post} steps={filterSteps(props.steps, post.post_id)} />
                })
            }
        </>
    )
}

export default PostList;
