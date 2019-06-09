import { combineReducers, createStore, applyMiddleware } from "redux";
import loginReducer from "./login/reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

const rootReducer = combineReducers({
  authentication: loginReducer
});

export type LoginState = ReturnType<typeof rootReducer>;

export const makeStore = initialState => {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
};
