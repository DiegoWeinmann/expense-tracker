import React, { createContext, useReducer } from 'react';

import { GlobalState, GlobalStateReducer } from '../types';
import { AppReducer } from '../reducers/AppReducer';

const initialState: GlobalState = {
  transactions: [
    {
      id: 1,
      text: 'Flower',
      amount: -20,
    },
    {
      id: 2,
      text: 'Salary',
      amount: 300,
    },
  ],
};

export const GlobalContext = createContext<GlobalState>(initialState);

export const GlobalProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer<GlobalStateReducer>(
    AppReducer,
    initialState
  );
  return (
    <GlobalContext.Provider value={{ transactions: state.transactions }}>
      {children}
    </GlobalContext.Provider>
  );
};
