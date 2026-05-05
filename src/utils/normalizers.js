function normalizeLanguage(language) {
  const value = String(language || "en").toLowerCase().trim();
  return value === "tr" ? "tr" : "en";
}

function normalizeAudience(audience) {
  const value = String(audience || "patient").toLowerCase().trim();
  return value === "doctor" ? "doctor" : "patient";
}

module.exports = {
  normalizeLanguage,
  normalizeAudience,
};
