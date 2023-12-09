import { HMS_PATH } from "../utils/helper";

export const API_ENDPOINTS = {
  authentication: {
    signUp: `${HMS_PATH}/auth/signUp`,
    signIn: `${HMS_PATH}/auth/signIn`,
    refreshToken: `${HMS_PATH}/auth/refreshToken`,
  },
};
