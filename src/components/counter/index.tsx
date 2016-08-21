import * as React from 'react';
import { AbstractStatelessComponent } from '../../helpers/ReactHelpers';

type Props = {
  value:number;
  onIncrement:()=>void;
  onDecrement:()=>void;
};

class Counter extends AbstractStatelessComponent<Props> {
  public render():JSX.Element {
    const { value, onIncrement, onDecrement } = this.props;
    return (
      <p>
        Clicked: {value} times
        {' '}
        <button onClick={onIncrement}>+</button>
        {' '}
        <button onClick={onDecrement}>-</button>
        {' '}
        <button onClick={() => { this.incrementIfOdd() }}>Increment if odd</button>
        {' '}
        <button onClick={() => { this.incrementAsync() }}>Increment async</button>
      </p>
    )
  }

  private incrementIfOdd():void {
    const { value, onIncrement } = this.props;
    if (value % 2 !== 0) {
      onIncrement();
    }
  }

  public incrementAsync():void {
    const { onIncrement } = this.props;
    setTimeout(onIncrement, 1000);
  }
}

export default Counter;
