import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import authReducer from '../features/auth/authSlice';
import { apiSlice } from '../services/authApis';
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";



const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["auth"],
};
// const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: {
      auth: authReducer,
      // auth:  persistReducer(persistConfig, authReducer),
      [apiSlice.reducerPath]: apiSlice.reducer, // auth
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({serializableCheck: false}).concat(apiSlice.middleware),
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

// export const persistor = persistStore(store);



// export const store = configureStore({
//   reducer: {
//     auth: authReducer,
//     [apiSlice.reducerPath]: apiSlice.reducer, // auth
//   },
//   middleware: getDefaultMiddleware => getDefaultMiddleware({serializableCheck: false}).concat(apiSlice.middleware),
//   devTools: true
// });

// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>;
// export type AppThunk<ReturnType = void> = ThunkAction<
// ReturnType,
// RootState,
// unknown,
// Action<string>
// >;

// setupListeners(store.dispatch)
