import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
  }


  search(e) {
    e.preventDefault();
    this.props.searchQuestions(e.target.value);
  }


  render() {
    return (
      <div>
        <div className='QA-searchBar'>
          <form>
              <p className='QA-title'>QUESTIONS & ANSWERS</p><br />
              <input
                type='text'
                className='QA-searchField'
                placeholder='HAVE A QUESTION? SEARCH FOR ANSWERS...                                                                                                                                                                                                                                                                                               🔍'
                onChange={(e) => this.search(e)}
              />
          </form>
        </div>
      </div>
    )
  }
}

export default SearchBar;