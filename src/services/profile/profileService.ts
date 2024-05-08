import { IUser } from '../../interfaces';
import { API_ENDPOINTS } from '../apiEndpoints';
import { apiSlice } from '../apiSlice';

export const profileService = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCurrentUserDetails: builder.query<IUser, string>({
      query: (userId) => API_ENDPOINTS.profile.currentUserDetails(userId),
    }),
  }),
});

export const { useGetCurrentUserDetailsQuery } = profileService;
