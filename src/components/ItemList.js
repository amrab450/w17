// Import React
import React from 'react';

// Define the ItemList component
const ItemList = ({ songs }) => {
  return (
    <ul>
     
      {songs.map((song, index) => (
        <li key={index}>
          <h2>{song.title}</h2>
          <p>by {song.artist}</p>
        </li>
      ))}
    </ul>
  );
};

// Export the ItemList component
export default ItemList;