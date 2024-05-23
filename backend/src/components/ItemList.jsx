// src/components/ItemList.js
import React from 'react';

const ItemList = ({ items, onDelete, onUpdate }) => {
  return (
    <div>
      {items.map(item => (
        <div key={item._id}>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <button onClick={() => onUpdate(item._id)}>Update</button>
          <button onClick={() => onDelete(item._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
