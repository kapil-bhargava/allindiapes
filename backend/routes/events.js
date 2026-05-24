import express from "express";
import multer from "multer";
import auth from "../middleware/auth.js";

const router = express.Router();

let events = [];

// Configure multer (file upload)
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// Add event (protected)
router.post("/", auth, upload.single("image"), (req, res) => {
  const newEvent = {
    title: req.body.title,
    image: req.file.filename,
  };

  events.push(newEvent);

  res.json({ message: "Event added", events });
});

// Get events
router.get("/", (req, res) => {
  res.json(events);
});

export default router;