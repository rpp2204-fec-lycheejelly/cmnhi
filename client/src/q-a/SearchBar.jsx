import React from 'react';


function SearchBar({placeholder, data}) {
  return (
    <div className='search'>
      <div className='searchInput'>
        <input type='text' placeholder={placeholder}/>
        <div className='searchIcon'></div>
      </div>
      
    </div>
  )
}

export default SearchBar;