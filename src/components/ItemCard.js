// Import React
import React from 'react';

// Define the ItemCard component
function ItemCard({ item }) {
  return (
    <div className="ItemCard">
      // Display the item name and description
      <h2>{item.name}</h2>
      <p>{item.description}</p>
    </div>
  );
}

// Export the ItemCard component
export default ItemCard;