import { LoginState, ActionTypes } from "./types";
import Immutable from "seamless-immutable";
import createReducer from "../createReducer";

const initialState: LoginState = Immutable({
  loggedIn: false,
  username: ""
});

// function loginStarted(state: LoginState): LoginState {
//   return Immutable.merge(state, { loggedIn: false });
// }

function loginSucceeded(state: LoginState): LoginState {
  return Immutable.merge(state, { loggedIn: true });
}

function loginFailed(state: LoginState): LoginState {
  return Immutable.merge(state, { loggedIn: false });
}

function logOut(state: LoginState): LoginState {
  return Immutable.merge(state, { loggedIn: false });
}

export default createReducer(initialState, {
  //[ActionTypes.LOGGING_IN]: loginStarted,
  [ActionTypes.LOGIN_SUCCESS]: loginSucceeded,
  [ActionTypes.LOGIN_FAILED]: loginFailed,
  [ActionTypes.LOGOUT]: logOut
});
