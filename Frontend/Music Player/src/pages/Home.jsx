import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const FeatureLink = ({ to, children }) => (
  <li>
    <Link to={to}>{children}</Link>
  </li>
);

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Music Streaming</h1>
      <p>Your one-stop platform to explore and enjoy music.</p>
      <h2>Features:</h2>
      <ul>
        <Link to="/music">Browse Music</Link>
        <Link to="/playlists">Your Playlists</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </ul>
    </div>
  );
};

export default Home;
