import { ISignInPayload, ISignUpPayload } from "../../interfaces";
import { Http } from "../../utils/helper";
import { API_ENDPOINTS } from "../apiEndpoints";
import { apiSlice } from "../apiSlice";

export const authService = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation<string, { payload: ISignUpPayload }>({
      query: ({ payload }) => ({
        url: API_ENDPOINTS.authentication.signUp,
        method: Http.POST,
        body: payload,
      }),
    }),

    login: builder.mutation<string, { payload: ISignInPayload }>({
      query: ({ payload }) => ({
        url: API_ENDPOINTS.authentication.signIn,
        method: Http.POST,
        body: payload,
      }),
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation } = authService;
