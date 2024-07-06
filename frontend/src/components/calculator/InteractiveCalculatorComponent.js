import React, { useState, useEffect } from "react";
import SimpleCalculationComponent from "./SimpleCalculationComponent";
import HistoryComponent from "./HistoryComponent";
import { safeApiCall } from "../../utils/api";

function InteractiveCalculatorComponent() {
  const [history, setHistory] = useState([]);

  const fetchHistory = async () => {
    const apiCall = async () => {
      const response = await fetch("http://localhost:8000/history");
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("HTTP error: " + response.statusText);
      }
    };

    // Ensure the Backend is Live (so that FE can be run independently)
    const data = await safeApiCall(apiCall);
    if (data) {
      setHistory(data);
    } else {
      console.warn("Failed to fetch history");
    }
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  const handleOperationComplete = () => {
    fetchHistory();
  };

  return (
    <div className="flex flex-col items-center p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-6">Math Operations</h1>
      <div className="w-full max-w-3xl space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Addition</h2>
          <SimpleCalculationComponent
            operation="add"
            onOperationComplete={handleOperationComplete}
          />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Subtraction</h2>
          <SimpleCalculationComponent
            operation="subtract"
            onOperationComplete={handleOperationComplete}
          />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Multiplication</h2>
          <SimpleCalculationComponent
            operation="multiply"
            onOperationComplete={handleOperationComplete}
          />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Division</h2>
          <SimpleCalculationComponent
            operation="divide"
            onOperationComplete={handleOperationComplete}
          />
        </div>
      </div>
      <div className="w-full max-w-3xl mt-6">
        <HistoryComponent history={history} />
      </div>
    </div>
  );
}

export default InteractiveCalculatorComponent;
