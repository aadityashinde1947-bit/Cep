import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './style.css';

// Replace Claude's preview-only storage API with browser localStorage.
window.storage = {
  async get(key) {
    const value = localStorage.getItem(key);
    return value === null ? null : { value };
  },
  async set(key, value) {
    localStorage.setItem(key, value);
    return { value };
  }
};

createRoot(document.getElementById('root')).render(
  <React.StrictMode><App /></React.StrictMode>
);
