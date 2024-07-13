var jwt = require("jsonwebtoken");
const JWT_SECRET = "gaurav1@bD";
const fetchuser = (req, res, next) => {
  // get the user from jwt token and add it to req object
  const token = req.header("auth-token");
  if (!token) {
    return res
      .status(401)
      .send({ error: "please authenticate with valid user" });
  }
  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user;
    next();
  } catch (error) {
    return res
      .status(401)
      .send({ error: "please authenticate with valid user" });
  }
};

module.exports = fetchuser;
