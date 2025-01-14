const mongoose = require('mongoose');

const musicSchema = new mongoose.Schema({
   title: { type: String, required: true },
   artist: { type: String, required: true },
   album: { type: String },
   genre: { type: String },
   duration: { type: Number },
   musicURL: { type: String, required: true },
});

const Music = mongoose.model('Music', musicSchema);
module.exports = Music;
