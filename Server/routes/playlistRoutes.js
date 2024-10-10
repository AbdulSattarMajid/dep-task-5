const express = require('express');
const { createPlaylist } = require('../controllers/playlistController');
const router = express.Router();

router.post('/playlists', createPlaylist);

module.exports = router;
