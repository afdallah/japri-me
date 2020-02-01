const jwt = require("jsonwebtoken");

function authenticate(req, res, next) {
  if (!req.headers.authorization)
    return res.status(400).json({ status: false, data: "Wrong header" });
  const [prefix, token] = req.headers.authorization.split(" ");

  if (!prefix)
    return res.status(400).json({ status: false, data: "No prefix found" });
  if (prefix !== "Bearer")
    return res.status(400).json({ status: false, data: "Wrong prefix" });

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(400).json({
      status: false,
      erros: err
    });
  }
}

module.exports = authenticate;
