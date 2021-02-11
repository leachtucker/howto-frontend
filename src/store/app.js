import { createSlice } from '@reduxjs/toolkit';
import axiosWithAuth from '../utils/axiosWithAuth';

import { useSelector } from 'react-redux';

const slice = createSlice({
    name: "app",
    initialState: {
        posts: [],
        fetching: false,
        error: ''
    },
    reducers: {
        fetchingPostsStart: (state, action) => {
            state.fetching = true;
        },
    }
})