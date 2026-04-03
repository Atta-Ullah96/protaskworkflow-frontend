// src/redux/api/taskApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const taskApi = createApi({
  reducerPath: 'taskApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BACKEND_URL}/api/v1/task`,
    credentials: 'include',
  }),
  tagTypes: ['Task' , 'Developers'],
  endpoints: (builder) => ({
    createTask: builder.mutation({
      query: (taskData) => ({
        url: '/create',
        method: 'POST',
        body: taskData,
      }),
      invalidatesTags: ['Task' , 'Developers'],
    }),
    getTasksByStatus: builder.query({
      query: (status) => `/filter?status=${status}`,
      providesTags: ['Task'],
    }),
    getTasksByDeveloperName: builder.query({
      query: (developerName) => `/filter/developer/name?name=${developerName}`,
      providesTags: ['Task'],
    }),
    updateTask: builder.mutation({
      query: ({ id, data }) => ({
        url: `/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Task'],
    }),
    deleteTask: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Task'],
    }),
    allTasks: builder.query({
      query: () => ({
        url: `/get`,
        method: 'GET',
      }),
        providesTags: ['Task'],
    }),
  }),
});

export const {
  useCreateTaskMutation,
  useGetTasksByStatusQuery,
  useGetTasksByDeveloperNameQuery,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
  useAllTasksQuery
} = taskApi;
