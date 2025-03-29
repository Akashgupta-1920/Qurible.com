const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db'); // Import the connection function from db.js
const userRoutes = require('./routes/userRoutes'); // Import your user routes

// Load environment variables
dotenv.config();

// Initialize the app
const app = express();

// Middleware
app.use(express.json()); // To parse JSON data in requests
app.use(cors()); // Allow cross-origin requests

// Connect to the MongoDB database
connectDB();

// Sample route to check the server
app.get('/', (req, res) => {
  res.send('Server is up and running!');
});

// Use the user routes for authentication
app.use('/api/auth', userRoutes);

// Server setup
const PORT = process.env.PORT || 6001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
