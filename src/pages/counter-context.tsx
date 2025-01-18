import React from 'react';
import { CounterProvider, useCounter } from '../contexts/CounterContext';

const Counter = () => {
  const { count, increment, decrement } = useCounter();

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

const App = () => (
  <CounterProvider>
    <Counter />
  </CounterProvider>
);

export default App;
