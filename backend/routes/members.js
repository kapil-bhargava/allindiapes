import express from "express";
import auth from "../middleware/auth.js";

const router = express.Router();

// Temporary data (no DB)
let members = [];

// Add member (protected)
router.post("/", auth, (req, res) => {
  members.push(req.body);
  res.json({ message: "Member added", members });
});

// Get all members (public)
router.get("/", (req, res) => {
  res.json(members);
});

export default router;