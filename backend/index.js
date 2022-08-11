require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");


const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");

// database connection
mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log("Connected to DB");
}).catch((err) => {
    console.log(err.message);
});

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/users", userRoutes);
 app.use("/api/auth", authRoutes);

const port = process.env.PORT || 5001;
app.listen(port, console.log(`Listening on port ${port}...`));