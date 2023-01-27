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
        setUser: (state, action: PayloadAction<{ token: string }>) => {
            const { token } = action.payload
            localStorage.setItem("token", token)
            state.token = action.payload.token;
            console.log(state.token, ' state.token')
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
        },
        selectCurrentBoolsetState: (state: AuthState, action: PayloadAction<{  statebool: boolean}>) => {
            state.statebool = !action.payload.statebool
            console.log(state.statebool, 'state.statebool state.statebool ' )
        }

    }
})

export const { setUser, logout, setCredentials, selectCurrentBoolsetState } = authSlice.actions;

export const selectAuth = (state: RootState) => state.auth

// selector to select use and token details from the store
// export const selectCurrentUser = (state: RootState) => state.auth.user
export const selectCurrentToken = (state: RootState) => state.auth?.auth?.token
export const selectCurrentBool = (state: RootState) => state.auth?.auth

export default authSlice.reducer;
