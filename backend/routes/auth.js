import express from "express";

const router = express.Router();

// Admin login route
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Check credentials from .env
  if (
    email === process.env.ADMIN_EMAIL &&
    password === process.env.ADMIN_PASSWORD
  ) {
    return res.json({
      token: "admin123", // simple token
    });
  }

  res.status(401).json({ message: "Invalid credentials" });
});

export default router;