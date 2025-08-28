import React from "react";
import { checkSpamKeywords } from "../utils/spamHelper";

export default function InputForm({ subject, setSubject, setResult }) {
  const handleTest = () => {
    const spamResult = checkSpamKeywords(subject);
    setResult({
      length: subject.length,
      spamScore: spamResult.score,
      spamWords: spamResult.found,
    });
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <label className="block font-medium mb-2">Email Subject Line</label>
      <input
        type="text"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        placeholder="Enter subject line..."
        className="w-full border rounded-lg p-2 mb-2 text-sm md:text-base"
      />
      <p className="text-xs md:text-sm text-gray-500 mb-4">
        Character count: {subject.length}
      </p>

      <button
        onClick={handleTest}
        className="w-full bg-blue-500 text-white py-2 rounded-lg font-medium hover:bg-blue-600 transition text-sm md:text-base"
      >
        Test Subject Line
      </button>
    </div>
  );
}
