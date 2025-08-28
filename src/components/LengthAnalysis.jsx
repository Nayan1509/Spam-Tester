import React from "react";
import { AlertTriangle } from "lucide-react";

export default function LengthAnalysis({ length }) {
  let status = "Good length";
  let color = "text-green-600";
  let label = "Optimal";

  if (length < 20) {
    status =
      "Too short - might lack detail. Optimal subject lines are 20-60 characters for best engagement.";
    color = "text-yellow-600";
    label = "Short";
  } else if (length > 60) {
    status = "Too long - might get cut off in inbox previews.";
    color = "text-red-600";
    label = "Long";
  }

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <div className="flex items-center gap-2 mb-2">
        <AlertTriangle className="text-yellow-500" />
        <h2 className="font-semibold">Length Analysis</h2>
      </div>
      <p className="text-gray-700">
        Characters: <strong>{length}</strong>
      </p>
      <p className={`${color} text-sm font-medium`}>{label}</p>
      <p className="text-gray-500 text-sm mt-2">{status}</p>
    </div>
  );
}
