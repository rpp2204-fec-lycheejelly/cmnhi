import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

  }


  render() {
    return (
      <div>
        <div className='QA-searchBar'>
          <form>
            <p className='QA-searchBarTitle'>QUESTIONS & ANSWERS</p>
            <input
              className='QA-searchField'
              placeholder='HAVE A QUESTION? SEARCH FOR ANSWERS...🔍'
              onChange={e => this.props.searchQuestions(e.target.value)}
            />
          </form>
        </div>
      </div>
    )
  }
}

// function SearchBar({placeholder, data}) {
//   return (
//     <div className='search'>
//       <div className='searchInput'>
//         <input type='text' placeholder={placeholder}/>
//         <span className='searchIcon'></span>
//       </div>
//     </div>
//   )
// }

export default SearchBar;