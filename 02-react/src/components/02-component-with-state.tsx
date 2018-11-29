import * as React from 'react';

interface CounterProps {
  initialValue: number;
}

interface CounterState {
  currentValue: number;
}

class Counter extends React.PureComponent<CounterProps, CounterState> {
  constructor(props: CounterProps) {
    super(props);

    this.state = {
      currentValue: props.initialValue,
    };
  }

  modifyCount = (delta: number) =>
    this.setState(previousState => ({
      ...previousState,
      currentValue: previousState.currentValue + delta,
    }));

  render() {
    const { currentValue } = this.state;
    const { initialValue } = this.props;
    const diff = currentValue - initialValue;

    return (
      <div>
        <h1>Counter component</h1>
        <div>
          InitialValue: <b>{initialValue}</b>
        </div>
        <div>
          CurrentValue: <b>{currentValue}</b>
        </div>
        <div>
          Difference: <b>{diff}</b>
        </div>
        <div>
          <button onClick={() => this.modifyCount(1)}>++</button>
          <button onClick={() => this.modifyCount(-1)}>--</button>
        </div>
      </div>
    );
  }
}

const Component = <Counter initialValue={10} />;
export default Component;
