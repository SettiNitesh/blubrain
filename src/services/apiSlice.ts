import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetBaseUrl } from "../utils";

const BASE_URL = GetBaseUrl();

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
});

export const apiSlice = createApi({
  baseQuery: baseQuery,
  tagTypes: [],
  endpoints: () => ({}),
});