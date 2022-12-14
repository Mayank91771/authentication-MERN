const path = require("path");
const express = require("express");
const dotenv = require("dotenv").config(); //to access environment (.env) variables
const { errorHandler } = require("./middlewares/errorMiddleware");
const colors = require("colors");
const connectDB = require("./config/db");
const cors = require("cors");

const PORT = process.env.port || 8000;

connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./routes/goalRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

app.use(errorHandler);
app.listen(PORT, () => console.log("Running on port: " + PORT));
