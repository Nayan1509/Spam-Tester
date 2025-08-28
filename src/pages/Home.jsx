import { useState } from "react";
import InputForm from "../components/InputForm";
import ResultCard from "../components/ResultCard";

export default function Home() {
  const [result, setResult] = useState(null);

  return (
    <div className="container">
      <h1 className="title">📧 Subject Line Tester</h1>
      <InputForm onResult={setResult} />
      <ResultCard result={result} />
    </div>
  );
}
