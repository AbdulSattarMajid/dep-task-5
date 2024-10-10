const mongoose = require('mongoose');

const playlistSchema = new mongoose.Schema({
   name: { type: String, required: true },
   user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
   music: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Music' }],
});

const Playlist = mongoose.model('Playlist', playlistSchema);
module.exports = Playlist;
