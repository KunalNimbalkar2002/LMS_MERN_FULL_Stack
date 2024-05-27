const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./Models/userModel");
const FormData = require("./Models/formModel");
const jwt = require("jsonwebtoken");

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect("mongodb://localhost:27017/LMSDataBaseProject")
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

// This is a Register Route
app.post("/api/register", async (req, res) => {
  console.log(req.body);
  try {
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    res.json({ status: "ok" });
  } catch (error) {
    res.json({ status: "error", error: "Duplicate email" });
  }
});

//This is a Login Route
app.post("/api/login", async (req, res) => {
  const user = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  });

  if (user) {
    //creating jwt token after sign in
    const token = jwt.sign(
      {
        name: user.name,
        email: user.email,
      },
      "secret"
    );

    res.json({ status: "ok", user: token });
    // console.log("token:::::::::::", token);
  } else {
    res.json({ status: "error", user: false });
  }
});

//  This is a formdata submit route
app.post("/api/formdata", async (req, res) => {
  console.log("data from frontend :::::::::", req.body);
  try {
    const user = await FormData.create({
      name: req.body.name,
      email: req.body.email,
      age: req.body.age,
      gender: req.body.gender,
      isStudent: req.body.isStudent,
      file: req.body.file,
    });
    res.json({ status: "ok" });
    console.log("response for formdata:::::", res);
  } catch (error) {
    res.json({ status: "error", error: "Duplicate email" });
  }
});

app.get("/api/getusers", (req, res) => {
  const user = User.find()
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.listen(1337, () => {
  console.log("Server started on 1337");
});
