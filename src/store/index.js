import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

// Reducers
import user from './user';
import app from './app';

// Redux store
const reducer = combineReducers({
    user,
    app
})

const store = configureStore({
  reducer
})

export default store;