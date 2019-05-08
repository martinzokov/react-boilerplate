import {
  LoginState,
  LoginActionTypes,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT
} from "./types";
import Immutable from "seamless-immutable";
const initialState: LoginState = Immutable({
  loggedIn: false,
  username: ""
});

export function loginReducer(
  state = initialState,
  action: LoginActionTypes
): LoginState {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return Immutable.merge(state, { loggedIn: true });

    case LOGIN_FAILED:
      return Immutable.merge(state, { loggedIn: false });

    case LOGOUT:
      return Immutable.merge(state, { loggedIn: false });

    default:
      return state;
  }
}
