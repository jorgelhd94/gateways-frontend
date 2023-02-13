import { IUser } from "./../../interfaces/IUser";
import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  user: IUser | null;
  token: string;
};

export const userSlice = createSlice({
  name: "user",
  initialState: <InitialState>{
    user: JSON.parse(localStorage.getItem("user") || "null"),
    token: localStorage.getItem("user_token"),
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      localStorage.setItem("user", JSON.stringify(state.user));
      localStorage.setItem("user_token", state.token);
    },
    logout: (state) => {
      state.user = null;
      state.token = "";
      localStorage.removeItem("user");
      localStorage.removeItem("user_token");
    },
  },
});

export const userSelectState = (state: InitialState) => {
  return { user: state.user, token: state.token };
};
export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
