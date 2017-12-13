import React from 'react';
import './SearchBar.css';

const sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count'
};//end of sortByOptions

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {term: '', location: '', sortBy: 'best_match'};
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  getSortByClass(sortByOption) {
    if (this.state.sortBy === sortByOption) {
      return ('active');
      } else {
        return '';
      }
    }// end of getSortByClass method

handleSortByChange(sortByOption) {
  this.setState({sortBy: sortByOption});
  }

handleTermChange(e) {
  this.setState({term: e.target.value});
}  //this is the end of an eventHandler: handleTermChange;

handleLocationChange(e) {
  this.setState({location: e.target.value});
}  //this is the end of an eventHandler: handleLocationChange;

handleSearch(e) {
  this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
  e.preventDefault();
}  //this is the end of an eventHandler: handleSearch;

  renderSortByOptions() {
    return Object.keys(sortByOptions).map(sortByOption => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return <li key={sortByOptionValue}
          className={this.getSortByClass(sortByOptionValue)}
          onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>
          {sortByOption}
        </li>
      });
    }//end renderSortByOptions method

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" onChange={this.handleTermChange} />
          <input placeholder="Where?" onChange={this.handleLocationChange} />
        </div>
        <div className="SearchBar-submit">
          <a onClick={this.handleSearch} >Let&#39;s Go</a>
        </div>
      </div>
    );
  }
}

export default SearchBar;
