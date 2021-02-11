import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

// Reducers
import user from './user';

// Redux store
const reducer = combineReducers({
    user,
})

const store = configureStore({
  reducer
})

export default store;