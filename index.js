const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

app.get("/api", (req, res) => {
  res.json({
    msg: "Welcome to the API",
  });
});

app.listen(5000, () => {
  console.log("Server listening on port 5000...");
});
