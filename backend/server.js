require("dotenv").config();
const express = require("express");
const mongoose = require("./config/db");
const cors = require("cors");

const taskRoutes = require("./routes/taskRoutes");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/tasks", taskRoutes);

// Add this route to respond to requests at "/"
app.get("/", (req, res) => {
    res.send("Welcome to TaskListProj API! Use /api/tasks for tasks.");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

