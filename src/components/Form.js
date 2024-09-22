

import React, { useState, useEffect } from 'react';

// Define Form component

function Form({ onSubmit, itemToEdit }) {
  
  // Initialize state for title and description
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (itemToEdit) {
      setTitle(itemToEdit.title);
      setDescription(itemToEdit.description);
    }
  }, [itemToEdit]);

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ id: itemToEdit ? itemToEdit.id : Date.now(), title, description });
  };

  // Render form   // Title input field// Description input field


  return (
    
  // Form structure
    <form onSubmit={handleSubmit}>
    
    <label>
    
        Title:
        <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
      </label>
      <br />
      
      {/* Description input field */}
      <label>
        Description:
        <input type="text" value={description} onChange={(event) => setDescription(event.target.value)} />
      </label>
      <br />
      
      <button type="submit">{itemToEdit ? 'Update' : 'Create'}</button>
    </form>
  );
}

export default Form;