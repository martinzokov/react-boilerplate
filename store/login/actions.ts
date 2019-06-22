import {
  Credentials,
  ActionTypes,
  ILoginRequest,
  ILoginSuccess,
  ILoginFailed,
  ILogout,
  ICheckLogin,
  OAuthLoginResponse
} from "./types";
import { ActionCreator, Dispatch } from "redux";
import authService from "../../services/api/auth/AuthService";

export const loginRequest: ActionCreator<ILoginRequest> = () => ({
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

const checkLogin: ActionCreator<ICheckLogin> = () => ({
  type: ActionTypes.CHECK_LOGIN
});

export function sendLogin(loginRequestCredentials: Credentials) {
  return async (dispatch: Dispatch) => {
    dispatch(loginRequest());
    try {
      await authService.login(
        loginRequestCredentials.username,
        loginRequestCredentials.password
      );
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

export function oAuthLogin(loginResponse: OAuthLoginResponse) {
  return async (dispatch: Dispatch) => {
    if (loginResponse.token) {
      dispatch(checkLogin());
      try {
        await authService.setToken(loginResponse.token);
        const isAuthenticated = await authService.pingAuth();

        if (isAuthenticated) {
          dispatch(loginSuccess());
        } else {
          dispatch(loginFailed("Error with token"));
        }
      } catch (e) {
        if (e.response && e.response.status === 403) {
          dispatch(loginFailed(loginResponse.error));
          dispatch(logOut());
          await authService.clearAuthData();
        }
      }
    } else {
      dispatch(loginFailed(loginResponse.error));
    }
  };
}

export function checkAuth() {
  return async (dispatch: Dispatch) => {
    dispatch(checkLogin());
    try {
      const isAuthenticated = await authService.pingAuth();

      if (isAuthenticated) {
        dispatch(loginSuccess());
      } else {
        dispatch(loginFailed("Error with token"));
      }
    } catch (e) {
      if (e.response && e.response.status === 403) {
        dispatch(
          loginFailed(
            e.response && e.response.status === 400
              ? "Invalid username and password"
              : "An error occurred"
          )
        );
        dispatch(logOut());
        await authService.clearAuthData();
      }
    }
  };
}
