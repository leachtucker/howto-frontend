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
                likes: [
                    ...state.user.likes,
                    ...action.payload
                ]
            }
            state.fetching = false;
        },
        sendLikeFailure: (state, action) => {
            state.error = action.payload;
            state.fetching = false;
        },
        sendUnlikeStart: (state, action) => {
            state.fetching = true;
        },
        sendUnlikeSuccess: (state, action) => {
            state.user = {
                ...state.user,
                likes: state.user.likes.filter(like => like.post_id !== action.payload)
            }
            state.fetching = false;
        },
        sendUnlikeFailure: (state, action) => {
            state.error = action.payload;
            state.fetching = false;
        },
        sendPostStart: (state, action) => {
            state.fetching = true;
        },
        sendPostSuccess: (state, action) => {
            state.posts = [
                ...state.posts,
                action.payload
            ];
            state.fetching = false;
        },
        sendPostFailure: (state, action) => {
            state.error = action.payload;
            state.fetching = false;
        },
        sendStepStart: (state, action) => {
            state.fetching = true;
        },
        sendStepSuccess: (state, action) => {
            state.steps = [
                ...state.steps,
                action.payload
            ]
            state.fetching = false;
        },
        sendStepFailure: (state, action) => {
            state.erorr = action.payload;
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
    sendLikeFailure,

    sendUnlikeStart,
    sendUnlikeSuccess,
    sendUnlikeFailure,

    sendPostStart,
    sendPostSuccess,
    sendPostFailure,

    sendStepStart,
    sendStepSuccess,
    sendStepFailure
} = slice.actions;

export const login = ({ username, password }, push) => async dispatch => {
    dispatch(loginStart());

    try {
        const res = await axiosWithAuth().post('/api/auth/login', { username, password });
        localStorage.setItem('token', res.data.token);
        dispatch(loginSuccess({ username }));
        push('/');
    } catch (err) {
        if (!err) {
            dispatch(loginFailure("There has been an error"))
        }

        return dispatch(loginFailure(err.response.data.message))
    }
}

export const logout = () => async dispatch => {
    try {
        localStorage.removeItem('token');
        dispatch(logoutSuccess());
    } catch (err) {
        if (!err) {
            dispatch(loginFailure("There has been an error"))
        }

        return console.log(err.response.data.message)
    }
}

export const fetchPosts = () => async dispatch => {
    dispatch(fetchPostsStart());

    try {
        const res = await axiosWithAuth().get('/api/posts');
        dispatch(fetchPostsSuccess(res.data))
    } catch(err) {
        if (!err) {
            dispatch(loginFailure("There has been an error"))
        }

        dispatch(fetchPostsFailure(err.response.data.message));
    }
}

export const fetchSteps = () => async dispatch => {
    dispatch(fetchStepsStart());

    try {
        const res = await axiosWithAuth().get('/api/steps');
        dispatch(fetchStepsSuccess(res.data));
    } catch(err) {
        if (!err) {
            dispatch(loginFailure("There has been an error"))
        }

        dispatch(fetchStepsFailure(err.response.data.message));
    }
}

export const fetchLikes = () => async dispatch => {
    dispatch(fetchLikesStart());

    try {
        const res = await axiosWithAuth().get('/api/likes');
        dispatch(fetchLikesSuccess(res.data));
    } catch(err) {
        if (!err) {
            dispatch(loginFailure("There has been an error"))
        }

        dispatch(fetchLikesFailure(err.response.data.message));
    }
}

export const sendLike = (post_id) => async dispatch => {
    dispatch(sendLikeStart());

    try {
        const res = await axiosWithAuth().post(`/api/likes`, { post_id });
        dispatch(sendLikeSuccess(res.data));
    } catch(err) {
        if (!err) {
            dispatch(loginFailure("There has been an error"))
        }

        dispatch(sendLikeFailure(err.response.data.message));
    }
}

export const sendUnlike = (post_id) => async dispatch => {
    dispatch(sendUnlikeStart());

    try {
        await axiosWithAuth().delete('/api/likes', { data: { post_id } });
        dispatch(sendUnlikeSuccess(post_id));
    } catch(err) {
        if (!err) {
            dispatch(loginFailure("There has been an error"))
        }

        dispatch(sendUnlikeFailure(err.response.data.message));
    }
}

export const sendPost = (post_data) => async dispatch => {
    dispatch(sendPostStart());

    try {
        const res = await axiosWithAuth().post('/api/posts', post_data);
        dispatch(sendPostSuccess(res.data));
    } catch(err) {
        if (!err) {
            dispatch(loginFailure("There has been an error"))
        }

        dispatch(sendPostFailure(err.response.data.message));
    }
}

export const sendStep = (step_data, toast) => async dispatch => {
    const transformedData = {
        step_name: step_data.stepName,
        step_number: step_data.stepNumber,
        post_id: step_data.postId
    }
    dispatch(sendStepStart());

    try {
        const res = await axiosWithAuth().post('/api/steps', transformedData);
        dispatch(sendStepSuccess(res.data));
        toast({
            title: "Step created.",
            description: "We've a new step for that post. Go check it out",
            status: "success",
            duration: 9000,
            isClosable: true,
        });
    } catch(err) {
        if (!err) {
            dispatch(loginFailure("There has been an error"))
        }

        dispatch(sendStepFailure(err.response.data.message));
    }
}