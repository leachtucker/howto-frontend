import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

// Reducers
import app from './app';

// Redux store
const reducer = combineReducers({
    app
})

const store = configureStore({
  reducer
})

export default store;