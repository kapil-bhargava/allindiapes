// index.js

import express from "express";
import dotenv from "dotenv";
import cors from "cors";

// Import routes
import authRoutes from "./routes/auth.js";
import memberRoutes from "./routes/members.js";
import eventRoutes from "./routes/events.js";

// Load environment variables
dotenv.config();

// Create express app
const app = express();

// ------------------ MIDDLEWARE ------------------ //

// Parse JSON data
app.use(express.json());

// Enable CORS (allow frontend connection)
app.use(cors());

// Serve uploaded images
app.use("/uploads", express.static("uploads"));

// ------------------ ROUTES ------------------ //

// Auth routes (login)
app.use("/api/auth", authRoutes);

// Members routes
app.use("/api/members", memberRoutes);

// Events routes
app.use("/api/events", eventRoutes);

// ------------------ TEST ROUTE ------------------ //

app.get("/", (req, res) => {
  res.send("API is running...");
});

// ------------------ SERVER START ------------------ //

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});