const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authenticateToken = require('../middleware/authenticateToken');
const user = require('../models/User');
require('dotenv').config();

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET;

// Signup Route
router.post('/signup', async (req, res) => {
  const { firstName, lastName, email, password, phoneNumber, dateOfBirth, gender, state, city } = req.body;
  try {
    // Check if email already exists
    const existingUser = await user.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new user({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      phoneNumber,
      dateOfBirth,
      gender,
      state,
      city
    });

    // Save the user to the database
    await newUser.save();

    // Generate a JWT token
    const token = jwt.sign({ userId: newUser._id }, JWT_SECRET, { expiresIn: '999d' });

    // Send response
    res.status(201).json({
      message: 'User created successfully',
      token,
      user: { _id: newUser._id, firstName: newUser.firstName, lastName: newUser.lastName, email: newUser.email }
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server error' });
  }
});

// Login Route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const foundUser = await user.findOne({ email });
    if (!foundUser) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, foundUser.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Generate a JWT token
    const token = jwt.sign({ userId: foundUser._id }, JWT_SECRET, { expiresIn: '999h' });

    // Send response
    res.status(200).json({
      message: 'Login successful',
      token,
      user: { _id: foundUser._id, firstName: foundUser.firstName, lastName: foundUser.lastName, email: foundUser.email }
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
