import { AuthType } from "../../services/apiTypes";
import { apiSlice } from "../../services/authApis";
// import { any, AuthType } from "../../services/apiTyoe";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query: body => ({
                url: `/auth/login`,
                method: 'POST',
                body
            }),
            transformResponse: (response: { data: AuthType }, meta, arg) => response.data,
            invalidatesTags: ['Auth'],
        }),
        reset: builder.mutation({
            query: body => ({
                url: `/auth/reset-password`,
                method: 'POST',
                body
            }),
            transformResponse: (response: { data: AuthType }, meta, arg) => response.data,
            invalidatesTags: ['Auth'],
        }),
        ForgotPassword: builder.mutation({
            query: body => ({
                url: `/auth/recover-password`,
                method: 'POST',
                body
            }),
            transformResponse: (response: { data: AuthType }, meta, arg) => response.data,
            invalidatesTags: ['Auth'],
        }),

    })
})

export const {
    useLoginMutation,
    useResetMutation,
    useForgotPasswordMutation,
} = authApiSlice

// __.gail__ full video from a tiktok i saw

