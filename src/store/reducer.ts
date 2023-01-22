import { apiSlice } from '../services/authApis';
import authReducer from '../features/auth/authSlice';
import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
    auth: authReducer,
    [apiSlice.reducerPath]: apiSlice.reducer, // auth

  });
  export default rootReducer;
