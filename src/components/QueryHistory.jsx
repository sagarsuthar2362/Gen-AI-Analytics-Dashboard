
import React from "react";
import { useSelector } from "react-redux";

function QueryHistory() {
  const queries = useSelector((state) => state.query.history);

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Query History</h2>
      {queries.length === 0 ? (
        <p className="text-gray-500 italic">No queries yet.</p>
      ) : (
        <ul className="space-y-3">
          {queries.map((q, idx) => (
            <li 
              key={idx} 
              className="text-gray-700 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-150"
            >
              {q}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
  export default QueryHistory;