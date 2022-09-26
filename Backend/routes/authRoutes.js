const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController')
const loginLimiter = require('../middleware/loginLimiter')

// 1. The first route is the login route. This route is only accessible via a POST request.
router.route('/')
    .post(loginLimiter, authController.login)

// 2. The second route is the refresh route. This route is only accessible via a GET request.
router.route('/refresh')
    .get(authController.refresh)

// 3. The third route is the logout route. This route is only accessible via a POST request.
router.route('/logout')
    .post(authController.logout)

module.exports = router