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
              type='text'
              className='QA-searchField'
              placeholder='HAVE A QUESTION? SEARCH FOR ANSWERS...                                                                                                                               🔍'
              onChange={e => this.props.searchQuestions(e.target.value)}
            />
          </form>
        </div>
      </div>
    )
  }
}

export default SearchBar;