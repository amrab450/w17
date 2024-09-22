
// Import dependencies
import React, { useState } from 'react';
import Form from './components/Form';
import ItemList from './components/ItemList';
import './App.css';

// Define App componen
function App() {

  // Initialize state
  const [items, setItems] = useState([]);
  const [itemToEdit, setItemToEdit] = useState(null);

// CRUD Operations
  const handleCreate = (newItem) => {
    setItems([...items, { id: Date.now(), ...newItem }]);
    setItemToEdit(null);
  };

  const handleUpdate = (updatedItem) => {
    setItems(items.map((item) => (item.id === updatedItem.id ? updatedItem : item)));
    setItemToEdit(null);
  };

  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleEdit = (item) => {
    setItemToEdit(item);
  };
  // Render components
  return (
    <div>
      <h1>CRUD App</h1>
      <Form
        onSubmit={itemToEdit ? handleUpdate : handleCreate}
        itemToEdit={itemToEdit}
      />
      <ItemList
        items={items}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </div>
  );
}

export default App;


