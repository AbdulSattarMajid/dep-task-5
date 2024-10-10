const Music = require('../models/Music');

// Get all music or filter by genre
exports.getMusic = async (req, res) => {
   const { genre } = req.query;
   try {
      const music = genre ? await Music.find({ genre }) : await Music.find();
      res.json(music);
   } catch (error) {
      res.status(500).send('Server Error');
   }
};
