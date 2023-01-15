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

        // fetch songs all songs
        allSongs: builder.query({ // get advert admin
            query: () => `/song/all`,
            providesTags: ["Auth"],
            transformResponse: (response: { data: any }, meta, arg) => response.data
        }),
        // dashboardState
        dashboardStats: builder.query({ // get advert admin
            query: () => `/dashboard/stats`,
            providesTags: ["Auth"],
            transformResponse: (response: { data: any }, meta, arg) => response.data
        }),
        // get All Transactions
        getAllTransactions: builder.query({ // get advert admin
            query: () => `/transactions/all`,
            providesTags: ["Auth"],
            transformResponse: (response: { data: any }, meta, arg) => response.data
        }),
        // get All Transactions
        getViewAllProfile: builder.query({ // get advert admin
            query: () => `/user/profile`,
            providesTags: ["Auth"],
            transformResponse: (response: { data: any }, meta, arg) => response.data
        }),
        // get all users
        getAllUsers: builder.query({ // get advert admin
            query: () => `/users?type=users`,
            providesTags: ["Auth"],
            transformResponse: (response: { data: any }, meta, arg) => response.data
        }),
        // get all workers
        getAllWorkers: builder.query({ // get advert admin
            query: () => `/users?type=workers`,
            providesTags: ["Auth"],
            transformResponse: (response: { data: any }, meta, arg) => response.data
        }),

        updateProfile: builder.mutation({
            query: body => ({
                url: `/user/profile`,
                method: 'PUT',
                body
            }),
            transformResponse: (response: { data: any }, meta, arg) => response.data,
            invalidatesTags: ['Auth'],
        }),
        changePassword: builder.mutation({
            query: body => ({
                url: `/user/profile/change-password`,
                method: 'PUT',
                body
            }),
            transformResponse: (response: { data: any }, meta, arg) => response.data,
            invalidatesTags: ['Auth'],
        }),
        createWorker: builder.mutation({
            query: body => ({
                // url: `/users?type=workers`,
                url: `/users/create-worker`,
                method: 'POST',
                body
            }),
            transformResponse: (response: any , meta, arg) => response.data,
            invalidatesTags: ['Auth'],
        }),

    })
})

export const {
    useLoginMutation,
    useResetMutation,
    useForgotPasswordMutation,

    // fetch songs
    useAllSongsQuery,

    // dashboardSTat
    useDashboardStatsQuery,

    // get All Transaction
    useGetAllTransactionsQuery,
    // view all profile
    useGetViewAllProfileQuery,
    // get all users
    useGetAllUsersQuery,
    // workers
    useGetAllWorkersQuery,
    // chnage password
    useChangePasswordMutation,
    // create workers
    useCreateWorkerMutation
} = authApiSlice

// __.gail__ full video from a tiktok i saw

