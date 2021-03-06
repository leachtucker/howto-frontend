import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Post from './Post';

// Filters an array of steps and reutrn
function filterSteps(array, post_id) {
    return array.filter(step => step.post_id === post_id);
}

function PostList(props) {
    const dispatch = useDispatch();
    const { likes } = useSelector(state => state.app.user);

    return (
        <>
            {props.posts &&
                props.posts.map(post => {
                    return <Post key={post.post_id} post={post} likes={likes} steps={filterSteps(props.steps, post.post_id)} dispatch={dispatch} />
                })
            }
        </>
    )
}

export default PostList;