const Playlist = require('../models/Playlist');
const Music = require('../models/Music');

// Create a new playlist
exports.createPlaylist = async (req, res) => {
   const { name, music } = req.body;
   try {
      const playlist = new Playlist({
         name,
         user: req.userId,
         music
      });
      await playlist.save();
      res.json(playlist);
   } catch (error) {
      res.status(500).send('Server Error');
   }
};
