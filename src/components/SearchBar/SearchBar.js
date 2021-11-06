import { useState } from 'react';
import './searchBar.css';

export default function SearchBar(props) {
  const [location, setLocation] = useState('');

  function search(e) {
    e.preventDefault()
    if (!location || location === '') return;
    props.handleForm(location);
  }

  return (
    <form className="search-bar" onSubmit={search}>
      <input
        type="text"
        name="location"
        value={location}
        onChange={e => setLocation(e.target.value)}
        placeholder="Search City"
      />
      <button>Search</button>
    </form>
  );
}
