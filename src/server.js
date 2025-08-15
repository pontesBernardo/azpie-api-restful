import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import compression from "compression";
import morgan from "morgan";

import authRoutes from "./routes/auth.routes.js";

dotenv.config();

const app = express();

app.use(helmet());
app.use(cors());
app.use(compression());
app.use(express.json());

app.use(morgan("combined"));

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.json({ message: "API FUNCIONANDO" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server are running on port ${PORT}`);
});
