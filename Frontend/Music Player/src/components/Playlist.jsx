import React, { useState, useEffect } from 'react';
import '../index.css';
const Playlists = () => {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    const fetchPlaylists = async () => {
      const response = await fetch('/api/playlists');
      const data = await response.json();
      setPlaylists(data);
    };
    fetchPlaylists();
  }, []);

  return (
    <div>
      <h2>Your Playlists</h2>
      <ul>
        {playlists.map((playlist) => (
          <li key={playlist._id}>{playlist.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Playlists;
