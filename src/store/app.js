import { createSlice } from '@reduxjs/toolkit';
import axiosWithAuth from '../utils/axiosWithAuth';

const slice = createSlice({
    name: "app",
    initialState: {
        posts: [],
        steps: [],
        user: {
            likes: []
        },
        fetching: false,
        error: ''
    },
    reducers: {
        loginStart: (state, action) => {
            state.fetching = true;
        },
        loginSuccess: (state, action) => {
            state.user = action.payload;
            state.fetching = false;
        },
        loginFailure: (state, action) => {
            state.error = action.payload;
            state.fetching = false;
        },
        logoutSuccess: (state, action) => {
            state.user = null;
        },
        fetchPostsStart: (state) => {
            state.fetching = true;
        },
        fetchPostsSuccess: (state, action) => {
            state.posts = action.payload;
            state.fetching = false;
        },
        fetchPostsFailure: (state, action) => {
            state.error = action.payload;
            state.fetching = false;
        },
        fetchStepsStart: (state) => {
            state.fetching = true;
        },
        fetchStepsSuccess: (state, action) => {
            state.steps = action.payload;
            state.fetching = false;
        },
        fetchStepsFailure: (state, action) => {
            state.error = action.payload;
            state.fetching = false;
        },
        fetchLikesStart: (state, action) => {
            state.fetching = true;
        },
        fetchLikesSuccess: (state, action) => {
            state.user = {
                ...state.user,
                likes: action.payload
            }
            state.fetching = false;
        },
        fetchLikesFailure: (state, action) => {
            state.error = action.payload;
            state.fetching = false;
        },
        sendLikeStart: (state, action) => {
            state.fetching = true;
        },
        sendLikeSuccess: (state, action) => {
            state.user = {
                ...state.user,
                likes:[
                    ...state.user.likes,
                    action.payload
                ]
            }
            state.fetching = false;
        },
        sendLikeFailure: (state, action) => {
            state.fetching = false;
        }
    }
})

export default slice.reducer;

const {
    loginStart,
    loginSuccess,
    loginFailure,
    logoutSuccess,
    fetchPostsStart,
    fetchPostsSuccess,
    fetchPostsFailure,
    fetchStepsStart,
    fetchStepsSuccess,
    fetchStepsFailure,
    fetchLikesStart,
    fetchLikesSuccess,
    fetchLikesFailure,
    sendLikeStart,
    sendLikeSuccess,
    sendLikeFailure
} = slice.actions;

export const login = ({ username, password }, push) => async dispatch => {
    dispatch(loginStart());
    try {
        const res = await axiosWithAuth().post('/api/auth/login', { username, password });
        localStorage.setItem('token', res.data.token);
        dispatch(loginSuccess({ username }));
        push('/');
    } catch (err) {
        console.log(err.response)
        return dispatch(loginFailure(err.response.data.message))
    }
}

export const logout = () => async dispatch => {
    try {
        localStorage.removeItem('token');
        dispatch(logoutSuccess());
    } catch (err) {
        return console.log(err.response.data.message)
    }
}

export const fetchPosts = () => async dispatch => {
    dispatch(fetchPostsStart());

    try {
        const res = await axiosWithAuth().get('/api/posts');
        dispatch(fetchPostsSuccess(res.data))
    } catch(err) {
        dispatch(fetchPostsFailure(err.response.data.message));
    }
}

export const fetchSteps = () => async dispatch => {
    dispatch(fetchStepsStart());

    try {
        const res = await axiosWithAuth().get('/api/steps');
        dispatch(fetchStepsSuccess(res.data));
    } catch(err) {
        dispatch(fetchStepsFailure(err.response.data.message));
    }
}

export const fetchLikes = () => async dispatch => {
    dispatch(fetchLikesStart());

    try {
        const res = await axiosWithAuth().get('/api/likes');
        dispatch(fetchLikesSuccess(res.data));
    } catch(err) {
        dispatch(fetchLikesFailure(err.response.data.message));
    }
}

export const sendLike = (post_id) => async dispatch => {
    dispatch(sendLikeStart());

    try {
        const res = await axiosWithAuth().post(`/api/likes`, { post_id });
        dispatch(sendLikeSuccess(res.data));
    } catch(err) {
        dispatch(sendLikeFailure(err.response.data.message));
    }
}
