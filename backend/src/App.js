// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ItemList from './components/ItemList';
import AddItemForm from './components/AddItemForm';
import SearchBar from './components/SearchBar';

const App = () => {
  const [items, setItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/items');
      setItems(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const addItem = async (item) => {
    try {
      const response = await axios.post('http://localhost:5000/api/items', item);
      setItems([...items, response.data]);
    } catch (error) {
      console.error(error);
    }
  };

  const updateItem = async (id) => {
    const item = items.find(item => item._id === id);
    const updatedName = prompt("Enter new name", item.name);
    const updatedDescription = prompt("Enter new description", item.description);

    try {
      const response = await axios.put(`http://localhost:5000/api/items/${id}`, {
        name: updatedName,
        description: updatedDescription
      });
      setItems(items.map(item => (item._id === id ? response.data : item)));
    } catch (error) {
      console.error(error);
    }
  };

  const deleteItem = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/items/${id}`);
      setItems(items.filter(item => item._id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const searchItems = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/items/search?query=${searchQuery}`);
      setItems(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <AddItemForm addItem={addItem} />
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} searchItems={searchItems} />
      <ItemList items={items} onDelete={deleteItem} onUpdate={updateItem} />
    </div>
  );
};

export default App;
