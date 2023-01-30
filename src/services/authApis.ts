// baseUrl: `https://rater-be.herokuapp.com`,
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { RootState } from "../store/store";
import { AuthType } from "./apiTypes";
import {logout, setCredentials } from "../features/auth/authSlice";
import { toast } from "react-toastify";

const baseQuery = fetchBaseQuery({
    baseUrl: `https://rater-be.herokuapp.com/api/v1`,
    // baseUrl: process.env.REACT_APP_API_KEY,
    credentials: 'include',
    prepareHeaders: (headers, { getState }: { getState: any }) => {
        const token = getState().auth?.auth?.token
        if (token) {
            headers.set("AUTHORIZATION", `Bearer ${token}`)
            // headers.set("Access-Control-Allow-Origin", `*`);
        }
        // headers.set("x-api-key", process.env.REACT_APP_API_KEY)
        return headers
    }
})

const baseQueryWithReauth = async (args: any, api: any, extraOptions: any) => {
    let result = await baseQuery(args, api, extraOptions)

    // 401 (Unauthorized) and 403 (Forbidden) status codes
    if ((result?.meta?.response?.status === 403 || result?.error?.status) && result?.meta?.response?.status === 401) {
        console.log('sending refresh token')
        // send refresh token to get new access token
        const refreshResult: any = await baseQuery(args, api, extraOptions)
        // const refreshResult: any = await baseQuery('/refresh', api, extraOptions)
        console.log(refreshResult, "refreshResult")
        if (refreshResult?.data) {
            const token = api.getState().auth.token
            // store the new token
            api.dispatch(setCredentials({ ...refreshResult.data, token }))
            // retry the original query with new access token
            result = await baseQuery(args, api, extraOptions)
        } else {
            toast.error("Something went wrong, Please login again!")
            setTimeout(() => {
                api.dispatch(logout());
            }, 1000);
        }
    }

    return result
}

export const apiSlice = createApi({
    baseQuery: baseQueryWithReauth,
    reducerPath: "authApi",
    tagTypes: ['Auth'],
    endpoints: builder => ({})
})
