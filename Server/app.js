const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const musicRoutes = require('./routes/musicRoutes');
const playlistRoutes = require('./routes/playlistRoutes');
const authMiddleware = require('./middleware/auth'); 

// Load environment variables
dotenv.config();

// Initialize the app
const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());

// Connect to MongoDB
connectDB();

// API Routes
app.use('/api/auth', authRoutes);     // User authentication routes
app.use('/api/music', musicRoutes);   // Music-related routes
app.use('/api/playlists', authMiddleware, playlistRoutes); // Playlist routes (protected by JWT)

// Set up a basic homepage route
app.get('/', (req, res) => {
    res.send('Music Streaming API is running...');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
