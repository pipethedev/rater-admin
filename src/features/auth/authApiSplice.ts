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
        RecoverReset: builder.mutation({
            query: body => ({
                url: `/auth/recover-password`,
                method: 'POST',
                body
            }),
            transformResponse: (response: { data: AuthType }, meta, arg) => response.data,
            invalidatesTags: ['Auth'],
        }),

        // Adverts
        createAdvert: builder.mutation({
            query: body => ({
                url: `/adverts`,
                method: 'POST',
                body
            }),
            transformResponse: (response: { data: any }, meta, arg) => response.data,
            invalidatesTags: ['Advert'],
        }),
        getAdvertAdmin: builder.query({ // get advert admin
            query: () => `/adverts`,
            providesTags: ["Advert"],
            transformResponse: (response: { data: any }, meta, arg) => response.data
        }),
        getAdvertUser: builder.query({ // get advert user
            query: () => `/adverts/user`,
            transformResponse: (response: { data: any }, meta, arg) => response.data,
            providesTags: ['Advert'],
        }),
        getAdvert: builder.query({ // get advert by id
            query: ({ id }) => `/adverts/${id}`,
            // transformResponse: (response: { data: AuthType }, meta, arg) => response.data,
            transformResponse: (response: { data: any }, meta, arg) => response.data,
            providesTags: ['Advert'],
        }),
        upDateAdvert: builder.mutation({
            query: body => ({
                url: `/adverts/:id`,
                method: 'PUT',
                body
            }),
            transformResponse: (response: { data: any }, meta, arg) => response.data,
            invalidatesTags: ['Advert'],
        }),
        //  End Adverts

        // User Auth
        // Create A User Account
        createUserAcc: builder.mutation({
            query: body => ({
                url: `/users`,
                method: 'PUT',
                body
            }),
            transformResponse: (response: { data: any }, meta, arg) => response.data,
            invalidatesTags: ['Advert'],
        }),

        // Authenticate User
        authenticateUser: builder.mutation({
            query: body => ({
                url: `/users/auth`,
                method: 'POST',
                body
            }),
            transformResponse: (response: { data: any }, meta, arg) => response.data,
            invalidatesTags: ['Advert'],
        }),

    })
})

export const {
    useLoginMutation,
    useResetMutation,
    useRecoverResetMutation,

    useCreateAdvertMutation,
    useGetAdvertAdminQuery,
    useGetAdvertQuery,
    useGetAdvertUserQuery,

    useCreateUserAccMutation,
    useAuthenticateUserMutation
} = authApiSlice

// __.gail__ full video from a tiktok i saw

