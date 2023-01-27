import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
interface AuthState {
    user: null | {}
    token: string | null
    statebool: boolean
}

const initialState: AuthState = {
    user: {},
    token: null,
    statebool: false
}
export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        // setUserDetail: (state, { payload }) => {
        //     state.user = {
        //         first_name: payload.first_name,
        //         last_name: payload.last_name,
        //         phone: payload.phone,
        //         email: payload.email,
        //         id: payload._id,
        //     };
        // },
        // setUserDetails: (state, { payload: { user } }) => {
        //     state.user = user;
        // },
        // setUserToken: (state, { payload }) => {
        //     state.token = payload?.token;
        //     console.log(state, 'state payload')
        // },
        // setUser: (state, action: PayloadAction<{ user: {}, token: string }>) => {
        setUser: (state, action: PayloadAction<{ token: string }>) => {
            // console.log(action, 'payload')
            const { token } = action.payload
            // console.log(token, 'payloaded token')
            // localStorage.setItem("token", JSON.stringify({ token }))
            localStorage.setItem("token", token)
            // localStorage.setItem(
            //     "user", JSON.stringify({
            //         user: action.payload.user,
            //         token: action.payload.token
            //     })
            // )
            // state.user = action.payload.user;
            state.token = action.payload.token;
            console.log( state.token, ' state.token')
        },

        // Dave authentication
        setCredentials: (state, action: PayloadAction<{ user: string, accessToken: string }>) => {
            const { user, accessToken } = action.payload
            state.user = user
            state.token = accessToken
            localStorage.setItem("token", accessToken)
        },
        logout: (state) => {
            localStorage.clear();
            state.user = null
            state.token = null
            // learn later
            // let redirectTo = window.location.pathname;
            window.localStorage.clear();
            // window.location.href = `/login?redirectTo=${redirectTo}`;
        }

    }
})

export const { setUser, logout, setCredentials } = authSlice.actions;

export const selectAuth = (state: RootState) => state.auth

// selector to select use and token details from the store
// export const selectCurrentUser = (state: RootState) => state.auth.user
export const selectCurrentToken = (state: RootState) => state.auth?.auth?.token
export const selectCurrentBool = (state: RootState) => state.auth?.auth?.statebool

export default authSlice.reducer;
