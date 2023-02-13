import { IUser } from "../../interfaces/IUser";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT = "LOGOUT";

export const loginSuccess = (user: IUser, token: string) => ({
  type: LOGIN_SUCCESS,
  payload: { user, token },
});

export const logout = () => ({
  type: LOGOUT,
});
