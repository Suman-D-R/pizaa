const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const route = require("./routes/routes");

const app = express();

dotenv.config({
    path: "./config.env"
});

app.use(express.json());

// MongoDB connection
const dbURI = process.env.MONGODB_URI || "mongodb://localhost:27017/PizzariaDB";
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });

// Event handling for successful MongoDB connection
mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB");
});

// Event handling for MongoDB connection error
mongoose.connection.on("error", (err) => {
    console.error(`MongoDB connection error: ${err}`);
});

app.use("/api", route);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
