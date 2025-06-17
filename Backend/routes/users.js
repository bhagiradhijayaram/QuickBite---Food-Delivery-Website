const express = require("express");
const router = express.Router();
const bcrypt = require("body-parser");

// SIGN UP
router.post("/signup", async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;
  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  if (!name || !email || !password || !confirmPassword) {
    return res.status(400).json({ error: "All fields are required" });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ error: "Passwords do not match" });
  }

  try {
    const db = req.db;

    const existingUser = await db.get("SELECT * FROM users WHERE email = ?", [
      email,
    ]);

    if (existingUser) {
      return res.status(409).json({ error: "User already exists" });
    }

    await db.run("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", [
      name,
      email,
      hashedPassword,
    ]);

    const newUser = await db.get("SELECT * FROM users WHERE email = ?", [
      email,
    ]);

    res.status(201).json({ message: "User registered", user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

// SIGN IN
router.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  try {
    const db = req.db;

    const user = await db.get(
      "SELECT * FROM users WHERE email = ? AND password = ?",
      [email, password]
    );

    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    res.status(200).json({ message: "Login successful", user });
    console.log({ user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
