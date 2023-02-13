import { IUser } from "./../../interfaces/IUser";
import { LOGIN_SUCCESS, LOGOUT } from "../actions/user.action";

type InitialState = {
  user: IUser | null;
  token: string | null;
};

const initialState: InitialState = {
  user: null,
  token: null,
};

export const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
        token: null,
      };
    default:
      return state;
  }
};
