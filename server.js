const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db'); // Import database connection

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to Database
connectDB();

app.get("/", (req, res) => {
    res.send("Backend is running!");
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
