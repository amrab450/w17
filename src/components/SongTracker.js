// Import React and the useState hook
import React, { useState } from 'react';

// Define the initial song data
const testData = [
  { title: 'Song 1', artist: 'Artist 1' },
  { title: 'Song 2', artist: 'Artist 2' },
];

// Define the SongTracker component
function SongTracker() {
  // Use the useState hook to store the song data and the new song form data
  const [songs, setSongs] = useState(testData);
  const [newSong, setNewSong] = useState({ title: '', artist: '' });

  // Define the addSong function to add a new song to the list
  const addSong = () => {
    setSongs([...songs, newSong]);
    setNewSong({ title: '', artist: '' });
  };

  // Define the deleteSong function to remove a song from the list
  const deleteSong = (index) => {
    setSongs(songs.filter((song, i) => i !== index));
  };

  return (
    <div>
      
      <h1>Song Tracker</h1>
      <ul>
        {songs.map((song, index) => (
          <li key={index}>
            <h2>{song.title}</h2>
            <p>by {song.artist}</p>
            <button onClick={() => deleteSong(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <form>
        <input
          type="text"
          value={newSong.title}
          onChange={(e) =>
            setNewSong({ ...newSong, title: e.target.value })
          }
          placeholder="Song Title"
        />
        <input
          type="text"
          value={newSong.artist}
          onChange={(e) =>
            setNewSong({ ...newSong, artist: e.target.value })
          }
          placeholder="Artist"
        />
        <button onClick={addSong}>Add Song</button>
      </form>
    </div>
  );
}

// Export the SongTracker component
export default SongTracker;
