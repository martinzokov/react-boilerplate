import {
  Credentials,
  ActionTypes,
  ILoginRequest,
  ILoginSuccess,
  ILoginFailed,
  ILogout
} from "./types";
import { ActionCreator, Dispatch } from "redux";
import authService from "../../services/api/auth/AuthService";

export const logginRequest: ActionCreator<ILoginRequest> = () => ({
  type: ActionTypes.LOGIN_REQUEST
});

const loginSuccess: ActionCreator<ILoginSuccess> = () => ({
  type: ActionTypes.LOGIN_SUCCESS
});

const loginFailed: ActionCreator<ILoginFailed> = (message: string) => ({
  type: ActionTypes.LOGIN_FAILED,
  payload: {
    message
  }
});

const logOut: ActionCreator<ILogout> = () => ({
  type: ActionTypes.LOGOUT
});

export function sendLogin(loginRequest: Credentials) {
  return async (dispatch: Dispatch) => {
    dispatch(logginRequest());
    try {
      await authService.login(loginRequest.username, loginRequest.password);
      dispatch(loginSuccess());
    } catch (e) {
      dispatch(
        loginFailed(
          e.response && e.response.status === 400
            ? "Invalid username and password"
            : "An error occurred"
        )
      );
    }
  };
}

export function sendLogout() {
  return async (dispatch: Dispatch) => {
    await authService.clearAuthData();
    dispatch(logOut());
  };
}
