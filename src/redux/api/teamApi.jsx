import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const teamApi = createApi({
  reducerPath: 'teamApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4000/api/v1/team',
    credentials: 'include', // include cookies
  }),
  tagTypes: ['Team'],
  endpoints: (builder) => ({
    createTeam: builder.mutation({
      query: (teamData) => ({
        url: '/create',
        method: 'POST',
        body: teamData,
      }),
      invalidatesTags: ['Team'],
    }),
    getAllTeams: builder.query({
      query: () => ({
        url: '/get',
        method: 'GET',
      }),
      providesTags: ['Team'],
    }),
    getTeamById: builder.query({
      query: (id) => ({
        url: `/${id}`,
        method: 'GET',
      }),
      providesTags: ['Team'],
    }),
    addDeveloperToTeam: builder.mutation({
      query: (data) => ({
        url: '/add/developer',
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Team'],
    }),
    removeDeveloperFromTeam: builder.mutation({
      query: (data) => ({
        url: '/remove/developer',
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Team'],
    }),
  }),
});

export const {
  useCreateTeamMutation,
  useGetAllTeamsQuery,
  useGetTeamByIdQuery,
  useAddDeveloperToTeamMutation,
  useRemoveDeveloperFromTeamMutation,
} = teamApi;
