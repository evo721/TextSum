//* summarize form component

import { useState, useEffect } from "react";
import styles from "../styles/summarize-form.module.css";

export function SummarizeForm() {
  const [text, setText] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("Updated summary:", summary); // Debugging statement
  }, [summary]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("/api/summarize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });

      if (response.headers.get("Content-Type") === "application/json") {
        const data = await response.json();
        console.log("Received JSON data:", data); // Debugging statement

        if (response.ok) {
          setSummary(data.summary);
        } else {
          console.error("Error:", data.error);
        }
      } else {
        const textData = await response.text();
        console.error("Invalid content type, expected JSON but received:", textData);
      }
    } catch (error) {
      console.error(error); // Debugging statement
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
        <p key={Date.now()} className={styles.summary}>{summary}</p>
      </div>
    </div>
  );
}
