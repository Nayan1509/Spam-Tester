import React, { useState } from "react";
import InputForm from "./components/InputForm";
import LengthAnalysis from "./components/LengthAnalysis";
import SpamScore from "./components/SpamScore";
import InboxPreview from "./components/InboxPreview";

export default function App() {
  const [subject, setSubject] = useState("");
  const [result, setResult] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">
        Subject Line Tester
      </h1>

      <div className="w-full max-w-4xl space-y-6">
        <InputForm
          subject={subject}
          setSubject={setSubject}
          setResult={setResult}
        />

        {result && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <LengthAnalysis length={result.length} />
            <SpamScore score={result.spamScore} spamWords={result.spamWords} />
          </div>
        )}

        {result && <InboxPreview subject={subject} />}
      </div>
    </div>
  );
}
