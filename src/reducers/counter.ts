import { AbstractReducer, AbstractAction } from '../helpers/ReduxHelpers';
import { INCREMENT, DECREMENT } from '../components/counter/actions';

type State = number;

const initialState:State = 0;
const counter:AbstractReducer<State> = (state:State = initialState, action:AbstractAction) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

export type CounterState = State;
export default counter;
