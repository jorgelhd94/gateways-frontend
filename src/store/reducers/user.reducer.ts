import { IUser } from "./../../interfaces/IUser";
import { LOGIN_SUCCESS, LOGOUT } from "../actions/user.action";
import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  user: IUser | null;
  token: string | null;
};

export const userSlice = createSlice({
  name: "user",
  initialState: <InitialState>{
    user: null,
    token: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const userSelectState = (state: InitialState) => {
  return { user: state.user, token: state.token };
};
export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
