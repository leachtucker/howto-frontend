import { createSlice } from '@reduxjs/toolkit';
import axiosWithAuth from '../utils/axiosWithAuth';

// Slice -- create new slice for every new 'slice' of state to hold
const slice = createSlice({
    name: 'user',
    initialState: {
        user: null,
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
        }
    }
})

export default slice.reducer

// Actions
const { loginStart, loginSuccess, loginFailure, logoutSuccess } = slice.actions;
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
        return console.log(err.response.message)
    }
}