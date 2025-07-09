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

// Test error route
app.get("/test-error", (req, res, next) => {
  const err = new Error("Simulated error for testing");
  err.status = 418;
  next(err);
});

// Centralized error handler
app.use((err, req, res, next) => {
  // Log error details
  console.error("--- Error Handler ---");
  console.error("Time:", new Date().toISOString());
  console.error("Method:", req.method);
  console.error("URL:", req.originalUrl);
  console.error("Body:", req.body);
  console.error("Error Stack:", err.stack);

  // Differentiate error response by environment
  const isDev = process.env.NODE_ENV !== "production";
  res.status(err.status || 500).json({
    error: isDev ? err.message : "Internal Server Error",
    ...(isDev && { stack: err.stack }),
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
