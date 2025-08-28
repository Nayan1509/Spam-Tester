import { useState } from "react";
import "../styles/InputForm.css";

export default function InputForm({ onResult }) {
  const [subject, setSubject] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      subject,
      length: subject.length,
      spam: { score: "N/A", report: "Run API here later" },
    };

    onResult(data);
    setSubject("");
  };

  return (
    <form onSubmit={handleSubmit} className="input-form">
      <input
        type="text"
        placeholder="Enter subject line..."
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        required
      />
      <button type="submit">Test Subject</button>
    </form>
  );
}
