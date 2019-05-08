export interface Credentials {
  username: string;
  password: string;
}

export interface LoginState {
  loggedIn: boolean;
  username: string;
}

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const LOGOUT = "LOGOUT";

interface LoginRequestAction {
  type: typeof LOGIN_REQUEST;
  credentials: Credentials;
}

interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  credentials: Credentials;
}

interface LogoutAction {
  type: typeof LOGOUT;
}

interface LoginFailedAction {
  type: typeof LOGIN_FAILED;
}

export type LoginActionTypes =
  | LoginRequestAction
  | LogoutAction
  | LoginFailedAction
  | LoginSuccessAction;
