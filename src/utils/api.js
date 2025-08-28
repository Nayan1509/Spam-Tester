import axios from "axios";

/**
 * Get spam score from Postmark SpamCheck API
 * @param {string} subject - Email subject line
 * @returns {object} { score, report }
 */
export const getSpamScore = async (subject) => {
  try {
    const response = await axios.post(
      "https://spamcheck.postmarkapp.com/filter",
      {
        email: `Subject: ${subject}`, 
        options: "short", 
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    return {
      score: response.data.score,
      report: response.data.report,
    };
  } catch (error) {
    console.error("Spam check API error:", error);
    return {
      score: "N/A",
      report: "Error connecting to Postmark API",
    };
  }
};
