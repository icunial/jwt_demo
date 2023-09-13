const express = require("express");
const jwt = require("jsonwebtoken");

const PORT = process.env.PORT || 5000;

const app = express();

// Get welcomed route
app.get("/api", (req, res) => {
  res.json({
    msg: "Welcome to the API",
  });
});

// Initialized Server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
