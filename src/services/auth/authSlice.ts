import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ILoginResponse } from '../../interfaces';

const initialState: ILoginResponse = {
  data: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') ?? '') : null,
};

const authSlice = createSlice({
  name: 'authReducer',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<ILoginResponse>) => {
      const { data: user } = action.payload;
      state.data = user;
      const userJSON = JSON.stringify(user);
      localStorage.setItem('user', userJSON);
    },
    logOut: (state) => {
      state.data = null;
      localStorage.removeItem('user');
    },
  },
});

export const { setToken, logOut } = authSlice.actions;

export default authSlice.reducer;

//Selectors to get the AccessToken, RefreshToken & User
export const selectAccessToken = (state: { auth: ILoginResponse }) => state.auth.data?.authorization;
export const selectRefreshToken = (state: { auth: ILoginResponse }) => state.auth.data?.refreshToken;
export const selectUser = (state: { auth: ILoginResponse }) => state.auth.data;
