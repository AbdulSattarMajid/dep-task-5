import React, { useState, useEffect } from 'react';

const Playlists = () => {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    const fetchPlaylists = async () => {
      const response = await fetch('/api/playlists'); // Update the API endpoint accordingly
      const data = await response.json();
      setPlaylists(data);
    };
    fetchPlaylists();
  }, []);

  return (
    <div>
      <h2>Your Playlists</h2>
      <ul>
        {playlists.length > 0 ? (
          playlists.map((playlist) => (
            <li key={playlist._id}>{playlist.name}</li>
          ))
        ) : (
          <li>No playlists found.</li>
        )}
      </ul>
    </div>
  );
};

export default Playlists;
