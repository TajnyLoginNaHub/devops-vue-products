import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serwuj statyczne pliki z /public
app.use(express.static(path.join(__dirname, "../public")));

// Endpoint 1: /
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// Endpoint 2: /products
app.get("/products", (req, res) => {
  res.json([
    { id: 1, name: "Keyboard", price: 199 },
    { id: 2, name: "Mouse", price: 99 },
    { id: 3, name: "Monitor", price: 899 }
  ]);
});

// Start
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
