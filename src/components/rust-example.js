import React, { useState } from 'react';
import { add } from '../../rust/lib.rs';

const RustExample = () => {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [totalAmount, setTotalAmount] = useState();

  function getRustValue() {
    let valueFromRust = add(firstNumber, secondNumber);
    setTotalAmount(valueFromRust);
  }

  return (
    <section className="flex-column">
      <div className="flex-column">
        <input type="number" onChange={(e) => setFirstNumber(e.target.value)} value={firstNumber} />
        <input type="number" onChange={(e) => setSecondNumber(e.target.value)} value={secondNumber} />
      </div>
      <h1>
        {firstNumber} + {secondNumber} = {totalAmount}
      </h1>
      <button onClick={() => getRustValue()}>Get value from Rust</button>
    </section>
  );
};

export default RustExample;
