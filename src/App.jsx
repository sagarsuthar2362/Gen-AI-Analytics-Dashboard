import React from "react";
import QueryInput from "./components/QueryInput";
import QueryHistory from "./components/QueryHistory";
import ResultsDisplay from "./components/ResultsDisplay";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Gen AI Analytics Dashboard</h1>
      <div className="max-w-4xl mx-auto grid gap-6">
        <QueryInput />
        <div className="grid md:grid-cols-2 gap-6">
          <QueryHistory />
          <ResultsDisplay />
        </div>
      </div>
    </div>
  );
}

export default App;