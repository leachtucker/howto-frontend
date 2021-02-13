import { createSlice } from '@reduxjs/toolkit';
import axiosWithAuth from '../utils/axiosWithAuth';

const slice = createSlice({
    name: "app",
    initialState: {
        posts: [],
        fetching: false,
        error: ''
    },
    reducers: {
        fetchPostsStart: (state, action) => {
            state.fetching = true;
        },
        fetchPostsSuccess: (state, action) => {
            state.posts = action.payload;
            state.fetching = false;
        },
        fetchPostsFailure: (state, action) => {
            state.error = action.payload;
            state.fetching = false;
        }
    }
})

export default slice.reducer;

const { fetchPostsStart, fetchPostsSuccess, fetchPostsFailure } = slice.actions;

export const fetchPosts = () => async dispatch => {
    dispatch(fetchPostsStart());

    try {
        const res = await axiosWithAuth().get('/api/posts');
        dispatch(fetchPostsSuccess(res.data))
    } catch (err) {
        dispatch(fetchPostsFailure(err.response.data.message));
    }
}