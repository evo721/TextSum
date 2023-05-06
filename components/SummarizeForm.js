import { useState, useEffect } from "react";
import styles from "../styles/summarize-form.module.css";

export function SummarizeForm() {
  const [text, setText] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    console.log("Updated summary:", summary);
  }, [summary]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const response = await fetch("/api/summarize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Response data:", data);
        setSummary(data.summary);
      } else if (response.status === 504) {
        setError("Server timeout. Please try again later.");
      } else {
        console.error("Invalid content type, expected JSON but received:", await response.text());
        setError("An error occurred while processing your request. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setError("An error occurred while processing your request. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor="text-area" className={styles.label}>
          Enter your text:
        </label>
        <textarea
          id="text-area"
          className={styles.textarea}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit" className={styles.submitButton}>
          Summarize
        </button>
      </form>
      <h3>Summary:</h3>
      <div className={styles.summaryContainer}>
        {loading && <div className={styles.spinner}></div>}
        {error && <p className={styles.error}>{error}</p>}
        <p key={Date.now()} className={styles.summary}>{summary}</p>
      </div>
    </div>
  );
}
