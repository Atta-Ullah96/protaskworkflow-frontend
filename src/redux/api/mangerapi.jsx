// src/redux/api/managerApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const managerApi = createApi({
  reducerPath: 'managerApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BACKEND_URL}/api/v1/manager`, // Change this to your backend URL
    credentials:'include'
  }),
  tagTypes: ['Developers' ],
  endpoints: (builder) => ({
    registerManager: builder.mutation({
      query: (data) => ({
        url: '/register',
        method: 'POST',
        body: data,
      }),
    }),
    loginManager: builder.mutation({
      query: (data) => ({
        url: '/login',
        method: 'POST',
        body: data,
      }),
    }),

    addDeveloper: builder.mutation({
      query: (developerData) => ({
        url: '/create/developer',
        method: 'POST',
        body: developerData,
      }),
      invalidatesTags: ['Developers'],
    }),
    getAllDevelopers: builder.query({
      query: () => '/developers',
      providesTags: ['Developers'],
    }),
     deleteDeveloper: builder.mutation({
      query: (id) => ({
        url: `/developer/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Developers'],
    }),
    
    updateDeveloper: builder.mutation({
      query: ({ id, data }) => ({
        url: `/developer/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Developers'],
    }),
    getFreeDeveloper: builder.query({
      query: () => ({
        url: `/free/developer`,
        method: 'GET',

      }),
         providesTags: ['Developers' ],
    }),
    logoutManager: builder.mutation({
      query: () => ({
        url: `/logout`,
        method: 'POST',

      }),
         providesTags: ['Developers'],
    }),
  }),
});

export const { useRegisterManagerMutation, useLoginManagerMutation,  useAddDeveloperMutation,
  useGetAllDevelopersQuery,
  useDeleteDeveloperMutation,
  useLogoutManagerMutation,
  useUpdateDeveloperMutation, useGetFreeDeveloperQuery } = managerApi;

