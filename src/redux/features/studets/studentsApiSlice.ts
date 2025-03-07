import { baseAPI } from "@/redux/api/api";

const studentApiSlice = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getStudents: builder.query({
      query: () => "/students",
    }),
    createStudent: builder.mutation({
      query: (data) => ({
        url: "/api/students",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetStudentsQuery, useCreateStudentMutation } =
  studentApiSlice;
