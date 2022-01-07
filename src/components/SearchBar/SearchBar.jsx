import { useState, useRef } from 'react';
import './searchBar.css';

export default function SearchBar({ handleForm }) {
  const searchRef = useRef()

  function search() {
    if (searchRef.current.value !== '') {
      handleForm(searchRef.current.value);
    }
  }

  return (
    <div className="search-box">
      <div className="search-bar">
        <input
          type="text"
          ref={searchRef}
          placeholder="Search City"
        />
        <button onClick={search}>Search</button>
      </div>
    </div>
  );
}
