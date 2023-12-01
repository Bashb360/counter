import React, { useState } from "react";

const FunctionalCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p id="bash">TRACKER: {count}</p>
      <button id="Plus" onClick={() => setCount(count + 1)}>
        PLUS
      </button>
      <button id="Minus" onClick={() => setCount(count - 1)}>
        MINUS
      </button>
    </div>
  );
};

export default FunctionalCounter;
