import React, { useState } from "react";

const SimpleCalculationComponent = ({ operation, onOperationComplete }) => {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [result, setResult] = useState(null);

  const handleOperation = async () => {
    const response = await fetch(`http://localhost:8000/${operation}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ a: parseInt(a), b: parseInt(b) }),
    });
    if (response.ok) {
      const data = await response.json();
      setResult(data.result);
      onOperationComplete(); // Call the callback to refresh history
    } else {
      console.error("HTTP error:", response.statusText);
    }
  };

  return (
    <div>
      <input
        type="number"
        value={a}
        onChange={(e) => setA(e.target.value)}
        placeholder="Enter first number"
      />
      <input
        type="number"
        value={b}
        onChange={(e) => setB(e.target.value)}
        placeholder="Enter second number"
      />
      <button onClick={handleOperation}>
        {operation.charAt(0).toUpperCase() + operation.slice(1)}
      </button>
      {result !== null && <p>Result: {result}</p>}
    </div>
  );
};

export default SimpleCalculationComponent;
