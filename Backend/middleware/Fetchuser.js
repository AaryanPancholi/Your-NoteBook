var jwt = require("jsonwebtoken");
const JWT_SECRET='AaryanCode'

const fetchUser = (req, res, next) => {
  //get the user from jwt token and and id to req object
  const token = req.header('auth-token');
  if (!token) {
    res.status(401).send({ error: "please authenticate using valid token" });
  }
  try {
    const data = jwt.verify(token, JWT_SECRET);
    if (!data || !data.user) {
      return res.status(401).send({ error: "Invalid token" });
    }
    req.user = data.user;
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = fetchUser
















































































;
