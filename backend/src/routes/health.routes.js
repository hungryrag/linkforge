import express from "express";
import db from "../config/db.js";

const router = express.Router();

router.get("/db", async (req, res) => {
  try {
    await db.raw("SELECT 1");

    res.status(200).json({
      status: "UP",
      database: "CONNECTED",
    });
  } catch (error) {
    res.status(500).json({
      status: "DOWN",
      database: "DISCONNECTED",
      error: error.message,
    });
  }
});

export default router;