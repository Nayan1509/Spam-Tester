import "../styles/ResultCard.css";

export default function ResultCard({ result }) {
  if (!result) return null;

  return (
    <div className="result-card">
      <p>
        <strong>Subject:</strong> {result.subject}
      </p>
      <p>
        <strong>Length:</strong> {result.length} characters
      </p>
      <p>
        <strong>Spam Score:</strong> {result.spam.score}
      </p>
      <p>
        <strong>Report:</strong> {result.spam.report}
      </p>
      <p>
        <strong>Preview:</strong> {result.subject} - This is a preview line…
      </p>
    </div>
  );
}
