// Simple auth middleware (no JWT)

const auth = (req, res, next) => {
  const token = req.headers.authorization;

  // Check token
  if (token === "admin123") {
    next(); // allow access
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
};

export default auth;