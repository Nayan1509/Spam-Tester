import React from "react";
import { XCircle } from "lucide-react";

export default function SpamScore({ score, spamWords }) {
  let status = "Looks Safe";
  let labelColor = "bg-green-100 text-green-700";
  let textColor = "text-green-600";

  if (score > 0) {
    status = "Potentially Spammy";
    labelColor = "bg-red-100 text-red-700";
    textColor = "text-red-600";
  }

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <div className="flex items-center gap-2 mb-2">
        <XCircle className="text-red-500" />
        <h2 className="font-semibold">Spam Score</h2>
      </div>
      <p className="text-gray-700">
        Score: <strong>{score}/10</strong>
      </p>
      <span
        className={`inline-block px-3 py-1 rounded-full text-sm font-medium mt-2 ${labelColor}`}
      >
        {status}
      </span>
      {spamWords.length > 0 && (
        <p className="text-sm text-gray-500 mt-2">
          Contains potentially spammy words: {spamWords.join(", ")}
        </p>
      )}
    </div>
  );
}
