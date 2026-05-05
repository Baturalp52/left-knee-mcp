#!/usr/bin/env node

const { startServer } = require("./src/server");

startServer().catch((error) => {
  console.error("Server error:", error);
  process.exit(1);
});
