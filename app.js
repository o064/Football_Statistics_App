const express = require('express');
const app = express();
const path = require('path');
const PlayerRoute = require('./routes/PlayerRoute');
const StatsRoute = require('./routes/StatsRoute');
const TeamRoute = require('./routes/TeamRoute');
const mongoose = require('mongoose');
//config
require('dotenv').config();
const PORT = process.env.PORT || 5000;
// database connection
mongoose.connect(process.env.MONGO_URI)
    .then(
        app.listen(PORT, () => {
            console.log("server is listening.....................");
        })
    ).catch(err => console.error("MongoDB Connection Error:", err));
// middleware
app.use(express.json());

// routes
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});
app.use("/player", PlayerRoute);
app.use("/team", TeamRoute);
app.use("/stats", StatsRoute);
// 404 not found page
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Page not found"
    });
});
