function formatResult(text) {
  return {
    content: [
      {
        type: "text",
        text,
      },
    ],
  };
}

module.exports = {
  formatResult,
};
