import { ActionType } from "../../helpers/ReduxHelpers";

export const INCREMENT:ActionType = "INCREMENT";
export const DECREMENT:ActionType = "DECREMENT";

export const increment = () => {
  return {
    type: INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: DECREMENT,
  };
};
