

import React from 'react';

// Define Item component
function Item({ item, onDelete, onEdit }) {
  return (
    
   // Display item title and description & Delete and Edit buttons with event 
    <div>
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <button onClick={() => onDelete(item.id)}>Delete</button>
      <button onClick={() => onEdit(item)}>Edit</button>
    </div>
  );
}

export default Item;