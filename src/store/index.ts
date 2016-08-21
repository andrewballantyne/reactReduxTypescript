import { createStore } from "redux";

import { AbstractStore } from "../helpers/ReduxHelpers";
import counter, { CounterState } from "../reducers/counter";

const store:AbstractStore<CounterState> = createStore(counter);

export default store;
