import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/SideBar';

const initialState = [
  { id: 1, title: 'Song 1', artist: 'adams', starred: false },
  { id: 2, title: 'Song 2', artist: 'jones', starred: false },
  { id: 3, title: 'Song 3', artist: 'djkhaled', starred: false },
];

function App() {
  const [songList, setSongList] = useState(initialState);
  const [selectedSong, setSelectedSong] = useState(null);
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');

  const handleCreate = () => {
    const newSong = { id: Date.now(), title, artist, starred: false };
    setSongList([...songList, newSong]);
    setTitle('');
    setArtist('');
  };

  const handleUpdate = () => {
    const updatedList = [...songList];
    const index = updatedList.findIndex((song) => song.id === selectedSong.id);
    updatedList[index].title = title;
    updatedList[index].artist = artist;
    setSongList(updatedList);
    setSelectedSong(null);
    setTitle('');
    setArtist('');
  };

  const handleDelete = (id) => {
    setSongList(songList.filter((song) => song.id !== id));
  };

  const handleToggleStar = (id) => {
    const updatedList = [...songList];
    const index = updatedList.findIndex((song) => song.id === id);
    updatedList[index].starred = !updatedList[index].starred;
    setSongList(updatedList);
  };

  const handleEdit = (song) => {
    setSelectedSong(song);
    setTitle(song.title);
    setArtist(song.artist);
  };

  return (
    <div className="App">
      <Sidebar title="My Sidebar" />
      <div className="SongTracker">
        <h1>Song Tracker</h1>
        <form>
          <label>
            Title:
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          </label>
          <br />
          <label>
            Artist:
            <input type="text" value={artist} onChange={(e) => setArtist(e.target.value)} />
          </label>
          <br />
          {selectedSong ? (
            <button type="button" onClick={handleUpdate}>Update Song</button>
          ) : (
            <button type="button" onClick={handleCreate}>Create New Song</button>
          )}
        </form>
        <ul>
          {songList.map((song) => (
            <li key={song.id}>
              <h2>{song.title}</h2>
              <p>{song.artist}</p>
              <button type="button" onClick={() => handleDelete(song.id)}>Delete</button>
              <button type="button" onClick={() => handleToggleStar(song.id)}>{song.starred ? 'Unstar' : 'Star'}</button>
              <button type="button" onClick={() => handleEdit(song)}>Edit</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;