const express = require('express');
const router = express.Router();
const path = require('path');

// 1. It first checks if the URL is either ‘/’ or ‘/index.html’. If so, it sends the index.html file.
// 2. If the URL is anything else, it sends the index.html file.
router.get('^/$|/index(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'))
})

module.exports = router