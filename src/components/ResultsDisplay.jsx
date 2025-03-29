import React from "react";
import { useSelector } from "react-redux";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const mockData = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 600 },
  { name: "Apr", value: 480 },
];

function ResultsDisplay() {
  const { currentResult, loading, error } = useSelector((state) => state.query);

  if (loading) return (
    <div className="text-center py-8">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto"></div>
      <p className="mt-2 text-gray-600">Processing query...</p>
    </div>
  );
  if (error) return (
    <p className="text-red-500 text-center p-6 bg-red-50 rounded-xl">
      {error}
    </p>
  );

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Results</h2>
      {mockData ? ( 
        <div className="space-y-6">
          <p className="text-gray-700 leading-relaxed bg-gray-50 p-4 rounded-lg">
            {currentResult}
          </p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <BarChart width={300} height={200} data={mockData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="name" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#fff', 
                  borderRadius: '8px', 
                  border: '1px solid #e5e7eb' 
                }} 
              />
              <Bar 
                dataKey="value" 
                fill="#8b5cf6" 
                radius={[4, 4, 0, 0]} 
                barSize={40}
              />
            </BarChart>
          </div>
        </div>
      ) : (
        <p className="text-gray-500 italic">No results yet.</p>
      )}
    </div>
  );
}

export default ResultsDisplay;