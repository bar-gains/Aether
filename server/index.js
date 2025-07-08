// Basic Express server setup
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Default route
app.get("/", (req, res) => {
  res.send("Hello, world! Your Express server is running.");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

// ...existing code from application root index.js...
