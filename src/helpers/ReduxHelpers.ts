type BaseAction = Redux.Action;
type BaseReducer<S> = (state:S, action:BaseAction) => S;
type BaseType = string;

export type AbstractReducer<S> = BaseReducer<S>;
export type AbstractAction = BaseAction;
export type ActionType = BaseType;