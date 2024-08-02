const jwt = require("jsonwebtoken");

function authentficateToken(res, req, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) res.sendstatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendstatus(401);
    req.user = user;
    next();
  });
}

module.exports = { authentficateToken };
