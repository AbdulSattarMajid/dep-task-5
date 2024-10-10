const express = require('express');
const { getMusic } = require('../controllers/musicController');
const router = express.Router();

router.get('/music', getMusic);

module.exports = router;

