import { ActionType } from '../../helpers/ReduxHelpers';

const INCREMENT:ActionType = 'INCREMENT';
const DECREMENT:ActionType = 'DECREMENT';

export const increment = () => {
  return {
    type: INCREMENT
  };
};

export const decrement = () => {
  return {
    type: DECREMENT
  };
};
