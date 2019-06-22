import { LoginState, ActionTypes, ILoginFailed } from "./types";
import Immutable from "seamless-immutable";
import createReducer from "../createReducer";

const initialState: LoginState = Immutable({
  loggedIn: false,
  username: ""
});

function loginRequested(state: LoginState): LoginState {
  return Immutable.merge(state, { loggedIn: false });
}

function loginSucceeded(state: LoginState): LoginState {
  return Immutable.merge(state, { loggedIn: true });
}

function loginFailed(state: LoginState, action: ILoginFailed): LoginState {
  return Immutable.merge(state, {
    loggedIn: false,
    loginError: action.payload.message
  });
}

function logOut(state: LoginState): LoginState {
  return Immutable.merge(state, { loggedIn: false });
}

export default createReducer(initialState, {
  [ActionTypes.LOGIN_REQUEST]: loginRequested,
  [ActionTypes.LOGIN_SUCCESS]: loginSucceeded,
  [ActionTypes.LOGIN_FAILED]: loginFailed,
  [ActionTypes.LOGOUT]: logOut
});
