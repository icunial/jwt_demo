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

app.post("/api/posts", verifyToken, (req, res) => {
  jwt.verify(req.token, "secret", (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      res.json({
        msg: `Post created...`,
        authData,
      });
    }
  });
});

app.post("/api/login", (req, res) => {
  // Mock user
  const user = {
    id: 1,
    username: "User 1",
    email: "user1@email.com",
  };

  jwt.sign({ user }, "secret", { expiresIn: "30s" }, (err, token) => {
    res.json({
      token,
    });
  });
});

// Token
// Bearer <token>

// Verify Token function middleware
function verifyToken(req, res, next) {
  // Get auth header value
  const bearerHeader = req.headers["authorization"];
  // Check if bearer is undefined
  if (typeof bearerHeader !== "undefined") {
    // Split at the space
    const token = bearerHeader.split(" ")[1];

    //Set the token
    req.token = token;

    next();
  } else {
    // Forbidden
    res.sendStatus(403);
  }
}

// Initialized Server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
