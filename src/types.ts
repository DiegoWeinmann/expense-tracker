export interface Transaction {
  id: number;
  text: string;
  amount: number;
}

export interface GlobalState {
  transactions: Transaction[];
}

// export type
export type DELETE_TRANSACTION = {
  type: 'DELETE_TRANSACTION';
  id: number;
};

export type GlobalStateActions = DELETE_TRANSACTION;

export type GlobalStateReducer = (
  state: GlobalState,
  action: GlobalStateActions
) => GlobalState;

export interface GlobalStateDispatch {
  dispatch: React.Dispatch<GlobalStateActions>;
}
