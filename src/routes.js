import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SongTracker from './pages/SongTracker';
import CreateSong from './pages/CreateSong';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/songs" element={<SongTracker />} />
        <Route path="/create" element={<CreateSong />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;