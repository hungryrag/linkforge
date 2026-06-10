import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "UP",
    service: "LinkForge API"
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`LinkForge API running on port ${PORT}`);
});