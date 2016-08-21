/// <reference path="_typings/include.d.ts" />
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { createStore } from 'redux'

import Counter from './components/counter'
import { increment, decrement } from './components/counter/actions';
import counter, { CounterState } from './reducers/counter'

const store:Redux.Store<CounterState> = createStore(counter);
const rootEl:HTMLElement = document.getElementById('root');

function render():void {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => store.dispatch(increment())}
      onDecrement={() => store.dispatch(decrement())}
    />,
    rootEl
  );
}

render();
store.subscribe(render);
