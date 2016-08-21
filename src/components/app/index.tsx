import * as React from "react";

import { AbstractStatelessComponent } from "../../helpers/ReactHelpers";

import store from "../../store";
import Counter from "../counter";
import { decrement, increment } from "../counter/actions";

type Props = {};

class App extends AbstractStatelessComponent<Props> {
  public render():JSX.Element {
    return (
      <div>
        <Counter
          value={store.getState()}
          onIncrement={() => store.dispatch(increment())}
          onDecrement={() => store.dispatch(decrement())}
        />
      </div>
    );
  }
}

export default App;
