// routes/userRoutes.js

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { auth, adminAuth } = require('../middleware/auth');

// Existing routes...
router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.get('/profile', auth, userController.getUserProfile);

// 🆕 New route for admin to get all users
router.get('/all', adminAuth, userController.getAllUsers);

module.exports = router;
