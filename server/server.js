const express = require("express");
const cors = require("cors");
const connectDB = require("./database");
const userRoutes = require("./routes/userRoutes");
const eventRoutes = require("./routes/eventRoutes");
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
connectDB();
app.use("/api/users", userRoutes);
app.use("/api/events", eventRoutes);
// Test Route
app.get("/", (req, res) => {
    res.send("College Event Management Server is Running...");
});

// Server
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});