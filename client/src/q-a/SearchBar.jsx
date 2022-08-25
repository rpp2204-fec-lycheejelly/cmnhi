import React from 'react';
import '../assets/styles.css';

function SearchBar({placeholder, data}) {
  return (
    <div className='search'>
      <div className='searchInput'>
        <input type='text' placeholder={placeholder}/>
        <span className='searchIcon'></span>
      </div>
    </div>
  )
}

export default SearchBar;