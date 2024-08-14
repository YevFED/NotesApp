const jwt = require("jsonwebtoken");

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  console.log(authHeader, " AUTH HEADER ");

  console.log(token, " USER TOKEN ");

  if (!token) {
    console.log("token not created");
    return res.sendStatus(401);
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(401);
    req.user = user;

    console.log(user);
    next();
  });
}

module.exports = { authenticateToken };
