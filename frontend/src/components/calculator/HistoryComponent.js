import React from "react";

const HistoryComponent = ({ history }) => {
  return (
    <div>
      <h2>History</h2>
      <ul>
        {history.map((item) => (
          <li key={item.id}>
            {item.a} {item.operation} {item.b} = {item.result}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HistoryComponent;
