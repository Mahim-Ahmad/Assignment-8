import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./auth.js";
import animalsRouter from "./routes/animals.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

// better-auth handles all /api/auth/* routes (login, register, google callback, session, update-user...)
// IMPORTANT: this must be registered BEFORE express.json()
app.all("/api/auth/*", toNodeHandler(auth));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("QurbaniHat API is running");
});

app.use("/api/animals", animalsRouter);

app.listen(PORT, () => {
  console.log(`QurbaniHat server running on port ${PORT}`);
});
