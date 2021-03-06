import { Action } from "redux";

export interface Credentials {
  username: string;
  password: string;
}

export interface OAuthLoginResponse {
  token?: string;
  error?: string;
}

export interface LoginState {
  loggedIn: boolean;
  username?: string;
  loginError?: string;
}

export enum ActionTypes {
  LOGIN_REQUEST = "@@auth/LOGIN_REQUEST",
  LOGIN_SUCCESS = "@@auth/LOGIN_SUCCESS",
  LOGIN_FAILED = "@@auth/LOGIN_FAILED",
  CHECK_LOGIN = "@@auth/CHECK_LOGIN",
  LOGOUT = "@@auth/LOGOUT"
}

export interface ILoginRequest extends Action {
  type: ActionTypes.LOGIN_REQUEST;
}

export interface ILoginSuccess extends Action {
  type: ActionTypes.LOGIN_SUCCESS;
}

export interface ILoginFailed extends Action {
  type: ActionTypes.LOGIN_FAILED;
  payload: {
    message: string;
  };
}

export interface ILogout extends Action {
  type: ActionTypes.LOGOUT;
}

export interface ICheckLogin extends Action {
  type: ActionTypes.CHECK_LOGIN;
}
