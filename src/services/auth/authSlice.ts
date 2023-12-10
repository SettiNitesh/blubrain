import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ILoginResponse } from "../../interfaces";

const initialState: ILoginResponse = {
  data: null,
};

const authSlice = createSlice({
  name: "authReducer",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<ILoginResponse>) => {
      const { data: user } = action.payload;
      state.data = user;
      // Convert the user object to a JSON string
      const userJSON = JSON.stringify(user);
      localStorage.setItem("user", userJSON);
    },
    logOut: (state) => {
      state.data = null;
      localStorage.removeItem("user");
    },
  },
});

export const { setToken, logOut } = authSlice.actions;

export default authSlice.reducer;

//Selectors to get the AccessToken, RefreshToken & User
export const selectAccessToken = (state: ILoginResponse) =>
  state.data?.authorization;
export const selectRefreshToken = (state: ILoginResponse) =>
  state.data?.refreshToken;
export const selectUser = (state: ILoginResponse) => state.data;
