import React, { useEffect, useState } from 'react';
import '../index.css';
const MusicList = () => {
  const [music, setMusic] = useState([]);

  useEffect(() => {
    const fetchMusic = async () => {
      try {
        const response = await fetch('/api/music'); 
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setMusic(data);
      } catch (error) {
        console.error('Error fetching music:', error);
      }
    };

    fetchMusic();
  }, []);

  return (
    <div>
      <h2>Available Music</h2>
      <ul>
        {music.map((track) => (
          <li key={track._id}>{track.title} by {track.artist}</li>
        ))}
      </ul>
    </div>
  );
};

export default MusicList;
