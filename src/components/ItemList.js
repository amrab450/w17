

import React from 'react';
import Item from './Item';

// Define ItemList component

function ItemList({ items, onDelete, onEdit }) {

  // Map items to Item components
 
  return (
    <div>
    
      {items.map((item) => (
        <Item key={item.id} item={item} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </div>
  );
}

export default ItemList;