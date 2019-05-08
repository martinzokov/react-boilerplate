import { combineReducers, createStore, applyMiddleware } from "redux";
import { loginReducer } from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

const rootReducer = combineReducers({
  login: loginReducer
});

export type LoginState = ReturnType<typeof rootReducer>;

export const initStore = initialState => {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
};
