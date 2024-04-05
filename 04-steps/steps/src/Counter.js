import { useState } from 'react';

export default function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  function decreaseStep() {
    setStep((s) => s - 1);
  }

  function increaseStep() {
    setStep((s) => s + 1);
  }

  function decreaseCount() {
    setCount((c) => (c -= step));
  }

  function increaseCount() {
    setCount((c) => (c += step));
  }

  return (
    <div className="container">
      <div className="step-btn-container">
        <button className="btn" onClick={decreaseStep}>
          -
        </button>
        <p>step: {step}</p>
        <button className="btn" onClick={increaseStep}>
          +
        </button>
      </div>

      <div className="count-btn-container">
        <button className="btn" onClick={decreaseCount}>
          -
        </button>
        <p>Count: {count}</p>
        <button className="btn" onClick={increaseCount}>
          +
        </button>
      </div>

      <p>
        <span>
          {count === 0
            ? 'Today is'
            : count < 0
            ? `${Math.abs(count)} days ago was `
            : `${count} days from now is `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
}
