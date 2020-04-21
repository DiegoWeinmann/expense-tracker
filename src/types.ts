export interface Transaction {
  id: number;
  text: string;
  amount: number;
}

export interface GlobalState {
  transactions: Transaction[];
}

// export type

export type GlobalStateActions = {
  type: 'ADD';
  payload: any;
};

export type GlobalStateReducer = (
  state: GlobalState,
  action: GlobalStateActions
) => GlobalState;
