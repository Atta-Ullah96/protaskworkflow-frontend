import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const developerApi = createApi({
  reducerPath: "developerApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BACKEND_URL}/api/v1/developer`,
    // for sending cookies with requests
    credentials: "include",
  }),
  tagTypes: ["Task", "Team"],
  endpoints: (builder) => ({
    loginDeveloper: builder.mutation({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: credentials,
      }),
    }),

    logoutDeveloper: builder.mutation({
      query: () => ({
        url: "/logout",
        method: "POST",
      }),
    }),

    getCurrentDeveloper: builder.query({
      query: () => "/me",
    }),

    // 1. Get tasks for a developer
    getDeveloperTasks: builder.query({
      query: () => `/task`,
      providesTags: ["Task"],
    }),

    // 2. Get developer's team info
    getDeveloperTeam: builder.query({
      query: () => `/team`,
      providesTags: ["Team"],
    }),

    // 3. Update task status
    updateTaskStatus: builder.mutation({
      query: ({ taskId, status }) => ({
        url: `/task/${taskId}`,
        method: "PUT",
        body: { status },
      }),
      invalidatesTags: ["Task"],
    }),

    updatePassword: builder.mutation({
      query: (body) => ({
        url: "/update/password",
        method: "PUT",
        body,
      }),
    }),
  }),
});

export const {
  useLoginDeveloperMutation,
  useLogoutDeveloperMutation,
  useGetCurrentDeveloperQuery,
  useGetDeveloperTasksQuery,
  useGetDeveloperTeamQuery,
  useUpdateTaskStatusMutation,
  useUpdatePasswordMutation
} = developerApi;
