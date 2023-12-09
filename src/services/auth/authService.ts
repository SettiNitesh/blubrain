import { ISignUpPayload } from "../../interfaces";
import { Http } from "../../utils/helper";
import { API_ENDPOINTS } from "../apiEndpoints";
import { apiSlice } from "../apiSlice";

export const authService = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation<void, ISignUpPayload>({
      query: (userData) => ({
        url: API_ENDPOINTS.authentication.signUp,
        method: Http.POST,
        body: { ...userData },
      }),
    }),
  }),
});
