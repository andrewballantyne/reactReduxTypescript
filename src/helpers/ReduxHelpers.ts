type BaseAction = Redux.Action;
type BaseReducer<S> = (state:S, action:BaseAction) => S;
type BaseType = string;
type BaseStore<S> = Redux.Store<S>;

export type AbstractReducer<S> = BaseReducer<S>;
export type AbstractAction = BaseAction;
export type ActionType = BaseType;
export type AbstractStore<S> = BaseStore<S>;
