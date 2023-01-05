import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
// import counterReducer from '../features/counter/counterSlice';
// import { authApi } from '../services/authApis';
// import { apiSlice } from '../services/api/apiSlice';
// import authReducer from "../features/auth/authSlice"


export const store = configureStore({
    reducer: {
    //   counter: counterReducer,
    //   auth: authReducer,
      // [authApi.reducerPath]: authApi.reducer,

      // dave
    //   [apiSlice.reducerPath]: apiSlice.reducer, // auth
      // [apiSlice.reducerPath]: apiSlice.reducer, //
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({serializableCheck: false}).concat(
      // authApi.middleware,
    //   apiSlice.middleware
      ),
    devTools: true
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

setupListeners(store.dispatch)
