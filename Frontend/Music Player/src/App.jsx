import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import MusicList from './components/Musiclist';
import Login from './components/Login';
import Signup from './components/Signup';
import Playlists from './pages/Playlist'; 

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/music" component={MusicList} />
        <Route path="/playlists" component={Playlists} /> {/* Create this component */}
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </Routes>
    </Router>
  );
};

export default App;
