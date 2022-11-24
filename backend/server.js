const express = require("express");
const dotenv = require("dotenv").config(); //to access environment (.env) variables
const { errorHandler } = require("./middlewares/errorMiddleware");
const colors = require("colors");
const connectDB = require("./config/db");
const PORT = process.env.port || 8000;

connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./routes/goalRoutes"));
app.use(errorHandler);
app.listen(PORT, () => console.log("Running on port: " + PORT));
