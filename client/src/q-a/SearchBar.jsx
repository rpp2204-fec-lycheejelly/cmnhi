import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   searchTerm: ''
    // }
    // this.onChange = this.onChange.bind(this);
    this.search = this.search.bind(this);
  }

  // onChange(e) {
  //   this.setState({
  //     searchTerm: e.target.value
  //   }, () => {
  //     this.search(e);
  //   })
  // }

  search(e) {
    e.preventDefault();
    this.props.searchQuestions(e.target.value);
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
              // onChange={e => this.props.searchQuestions(e.target.value)}
              onChange={(e) => this.search(e)}
            />
          </form>
        </div>
      </div>
    )
  }
}

export default SearchBar;