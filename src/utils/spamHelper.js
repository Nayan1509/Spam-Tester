export const checkSpamKeywords = (subject) => {
  const keywords = ["FREE", "WIN", "OFFER", "MONEY", "CASH", "PRIZE", "CLICK"];
  const found = keywords.filter((word) => subject.toUpperCase().includes(word));

  return {
    score: found.length * 2,
    found,
  };
};
