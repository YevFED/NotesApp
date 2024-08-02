require("dotenv").config();

// Imports
const config = require("./config.json");
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const authentficateToken = require("./utilites");

// Connect to mongoDB

mongoose.connect(config.connectionString);

const User = require("./models/user.model");

// Creating app
const app = express();
app.use(express.json());
app.use(cors({ origin: "*" }));

app.get("/", (req, res) => {
  res.json({ name: "Yev" });
});

// Sign Up API

app.post("/signUp", async (req, res) => {
  const { fullName, email, password } = req.body;

  // Checking empty ? or not

  if (!fullName) {
    return res
      .status(400)
      .json({ error: true, message: "Please type your Full Name" });
  }

  if (!email) {
    return res
      .status(400)
      .json({ error: true, message: "Please type your email" });
  }

  if (!password) {
    return res
      .status(400)
      .json({ error: true, message: "Please type your password" });
  }

  // Creating new User

  const isUser = await User.findOne({ email: email });

  if (isUser) {
    return res.json({
      error: true,
      message: "User already exist",
    });
  }

  const newUser = new User({
    fullName,
    email,
    password,
  });

  await newUser.save();

  //  Creating a token

  const accessToken = jwt.sign({ newUser }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "36000m",
  });

  return res.json({
    error: false,
    newUser,
    accessToken,
    message: "Sign up succesfull",
  });
});

// Login API

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }
  if (!password) {
    return res.status(400).json({ message: "Password is required" });
  }

  const userInfo = await User.findOne({ email: email });

  if (!userInfo) {
    return res.status(400).json({ message: "Invalid email or password" });
  }

  // Checking if the user type valid requires ???

  if (userInfo.email == email && userInfo.password == password) {
    const user = { user: userInfo };
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "3600m",
    });

    return res.json({
      error: false,
      message: "Log in successful",
      email,
      accessToken,
    });
  } else {
    return res.status(400).json({
      error: true,
      message: "log in Error",
    });
  }
});

app.listen(8000);

module.exports = app;
