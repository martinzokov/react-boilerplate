export default function createReducer<State>(
  initialState: State,
  handlers: { [key: string]: (state: State, action: any) => State }
) {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    } else {
      return state;
    }
  };
}
