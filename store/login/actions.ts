import {
  Credentials,
  LoginActionTypes,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  LOGOUT
} from "./types";

export function sendLogin(loginRequest: Credentials): LoginActionTypes {
  const loginResponse = true;
  if (loginResponse === true) {
    return {
      type: LOGIN_SUCCESS,
      credentials: loginRequest
    };
  } else {
    return {
      type: LOGIN_FAILED
    };
  }
}

export function sendLogout(): LoginActionTypes {
  return {
    type: LOGOUT
  };
}
