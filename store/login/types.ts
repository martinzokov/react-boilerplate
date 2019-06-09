import { Action } from "redux";

export interface Credentials {
  username: string;
  password: string;
}

export interface LoginState {
  loggedIn: boolean;
  username?: string;
}

export enum ActionTypes {
  LOGIN_REQUEST = "@@auth/LOGIN_REQUEST",
  LOGIN_SUCCESS = "@@auth/LOGIN_SUCCESS",
  LOGIN_FAILED = "@@auth/LOGIN_FAILED",
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

// export type LoginActionTypes =
//   | ILoginRequest
//   | ILogout
//   | ILoginFailed
//   | ILoginSuccess;
