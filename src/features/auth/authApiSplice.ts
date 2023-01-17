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
        allSongs: builder.query({
            query: () => `/song/all`,
            providesTags: ["Auth"],
            transformResponse: (response: any, meta, arg) => response.data
        }),
        // fetch a single song
        singleSong: builder.query({
            query: (id) => `/song/${id}`,
            providesTags: ["Auth"],
            transformResponse: (response: any , meta, arg) => response.data
        }),
        // dashboardState
        dashboardStats: builder.query({
            query: () => `/dashboard/stats`,
            providesTags: ["Auth"],
            transformResponse: (response: any, meta, arg) => response.data
        }),
        // get All Transactions
        getAllTransactions: builder.query({
            query: () => `/transactions/all`,
            providesTags: ["Auth"],
            transformResponse: (response: any, meta, arg) => response.data
        }),
        // get All Transactions
        getViewAllProfile: builder.query({
            query: () => `/user/profile`,
            providesTags: ["Auth"],
            transformResponse: (response: any, meta, arg) => response.data
        }),
        // get all users
        getAllUsers: builder.query({
            query: () => `/users?type=users`,
            providesTags: ["Auth"],
            transformResponse: (response: any, meta, arg) => response.data
        }),
        // get all workers
        getAllWorkers: builder.query({
            query: () => `/users?type=workers`,
            providesTags: ["Auth"],
            transformResponse: (response: any, meta, arg) => response.data
        }),
        // get all all pricings
        getPricings: builder.query({
            query: () => `/pricing`,
            providesTags: ["Auth"],
            transformResponse: (response: any, meta, arg) => response.data
        }),

        updateProfile: builder.mutation({
            query: body => ({
                url: `/user/profile`,
                method: 'PUT',
                body
            }),
            transformResponse: (response:  any , meta, arg) => response.data,
            invalidatesTags: ['Auth'],
        }),
        changePassword: builder.mutation({
            query: body => ({
                url: `/user/profile/change-password`,
                method: 'PUT',
                body
            }),
            transformResponse: (response: any, meta, arg) => response.data,
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
        createFeedback: builder.mutation({
            query: ({body, id}) => ({
                url: `/rating/admin-feedback/${id}`,
                method: 'POST',
                body
            }),
            transformResponse: (response: any , meta, arg) => response.data,
            invalidatesTags: ['Auth'],
        }),
        uploadMusic: builder.mutation({
            query: body => ({
                // url: `/admin-feedback/:songId`,
                url: `/song/upload`,
                method: 'POST',
                body
            }),
            transformResponse: (response: any , meta, arg) => response.data,
            invalidatesTags: ['Auth'],
        }),
        // Update pricing
        updatePricing: builder.mutation({
            query: ({body, id}) => ({
                // url: `/admin-feedback/:songId`,
                url: `/pricing/update/${id}`,
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

    // fetch a single song
    useSingleSongQuery,

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
    useCreateWorkerMutation,
    // fetch all pricing
    useGetPricingsQuery,
    // create a feedback
    useCreateFeedbackMutation,
    // upload music
    useUploadMusicMutation
    // update pricing
} = authApiSlice

// __.gail__ full video from a tiktok i saw

