const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// simple test route
app.get("/", (req, res) => {
  res.send("Backend is running ✅");
});

// resume route (example)
app.get("/resume", (req, res) => {
  res.json({ url: "http://localhost:5000/files/resume.pdf" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
