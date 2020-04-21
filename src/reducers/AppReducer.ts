import { GlobalState, GlobalStateReducer } from '../types';

export const AppReducer: GlobalStateReducer = (
  state: GlobalState,
  action
): GlobalState => {
  switch (action.type) {
    default:
      return state;
  }
};
