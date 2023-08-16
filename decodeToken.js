const jwt = require("jsonwebtoken");
const decodedToken = (req, requireAuth = true) => {
  const header = req.req.headers.authorization;
  console.log("header", header);

  if (header) {
    const token = header.replace("Bearer ", "");
    console.log("token", token);
    const decoded = jwt.verify(token, "Doremon");
    console.log("decodeTaoken", decoded);
    return decoded;
  }
  if (requireAuth) {
    throw new Error("Login in to access resource");
  }
  return null;
};
module.exports = { decodedToken };
