
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 70);
  };

  const decrementCount = () => {
    setCount(count - 40);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>
        Increment Count
      </button>
      <button onClick={decrementCount}>
        Decrement Count
      </button>
    </div>
  );
}

export default App;