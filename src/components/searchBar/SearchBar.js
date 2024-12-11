import React, { useState } from 'react';
import './SearchBar.css';


import anime from 'animejs/lib/anime.es.js';

function SearchBar({ onFocus, onBlur }) {
  const [query, setQuery] = useState("");
  
  const handleFocus = () => {
    onFocus();  // Focus eventini parent'e ilet
  };

  const handleBlur = () => {
    if (!query) {
      onBlur();  // Blur eventini parent'e ilet
    }
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder="Search..."
        className="search-input"
      />
    </div>
  );
}

export default SearchBar;
