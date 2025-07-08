// Basic Express server setup
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const app = express();
const PORT = process.env.PORT || 3000;

// Trust proxy for rate limiting
app.set("trust proxy", 1);

// Middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));

// Health endpoint
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// Default route
app.get("/", (req, res) => {
  res.send("Hello, world! Your Express server is running.");
});

// Centralized error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
