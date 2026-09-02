import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

const animalsPath = path.join(__dirname, "../data/animals.json");
const animals = JSON.parse(fs.readFileSync(animalsPath, "utf-8"));

// GET /api/animals  -> all animals, optional ?sort=asc|desc by price
router.get("/", (req, res) => {
  const { sort } = req.query;
  let result = [...animals];

  if (sort === "asc") result.sort((a, b) => a.price - b.price);
  if (sort === "desc") result.sort((a, b) => b.price - a.price);

  res.json(result);
});

// GET /api/animals/featured -> 4 featured animals for the Home page
router.get("/featured", (req, res) => {
  res.json(animals.slice(0, 4));
});

// GET /api/animals/:id -> single animal details
router.get("/:id", (req, res) => {
  const animal = animals.find((a) => a.id === Number(req.params.id));
  if (!animal) return res.status(404).json({ message: "Animal not found" });
  res.json(animal);
});

export default router;
