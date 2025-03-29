import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { submitQuery } from "../redux/querySlice";

const suggestions = [
  "What are the sales trends this quarter?",
  "Show revenue by region",
  "Compare product performance",
];

function QueryInput() {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      dispatch(submitQuery(query));
      setQuery("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative space-y-3">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask a business question..."
          className="w-full p-4 pr-10 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white shadow-sm transition-all duration-200"
        />
        {query && (
          <ul className="absolute z-10 w-full mt-2 bg-white border border-gray-100 rounded-xl shadow-xl overflow-hidden">
            {suggestions
              .filter((s) => s.toLowerCase().includes(query.toLowerCase()))
              .map((s, idx) => (
                <li
                  key={idx}
                  onClick={() => setQuery(s)}
                  className="p-3 text-gray-700 hover:bg-blue-50 cursor-pointer transition-colors duration-150"
                >
                  {s}
                </li>
              ))}
          </ul>
        )}
      </div>
      <button 
        type="submit" 
        className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-3 rounded-xl font-medium hover:from-blue-700 hover:to-blue-600 transition-all duration-200 shadow-md"
      >
        Submit Query
      </button>
    </form>
  );
}

export default QueryInput;