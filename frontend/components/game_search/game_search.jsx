import React from 'react';
import GameSearchItem from './game_search_item';
import { withRouter } from 'react-router-dom';
import { searchIcon } from '../logo';

class GameSearch extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: ''
    };
    this.debounceSearch = this.debounceSearch.bind(this);
    this.focusSearch = this.focusSearch.bind(this);
  }
  addSearchBorder(){
    const search = document.getElementById('search-placeholder');
    search.classList.add('search-focus');
  }

  
  displayResults(){
    const results = document.getElementById('search-results-container');
    results.classList.remove('hide-results');
  }
  
  
  darkenScreen(){
    const content = document.getElementsByClassName('games-index-content')[0] 
    || document.getElementsByClassName('user-profile-content')[0];
    content.classList.add('darken');
  }
  
  

  focusSearch(){
    this.addSearchBorder();
    this.darkenScreen();
    this.displayResults();
  }




  debounceSearch(func, delay) {
    let inDebounce;
    return (e) => {
      e.persist();
      clearTimeout(inDebounce);
      inDebounce = setTimeout(func.bind(this, e), delay);
    };
  }

  componentWillUnmount(){
    this.props.clearSearchGames();
  }

  performSearch(e){
    this.setState({title: e.target.value});
    this.props.fetchSearchGames(this.state);
  }

  render(){
    const { fetchSearchGames, searchResults } = this.props;
    return (
      <div id="search-placeholder" onFocus={this.focusSearch} >
        {searchIcon}
        <input type="text" maxLength="100" placeholder="Search" onChange={this.debounceSearch(this.performSearch, 250)}/>
        <div id="search-results-container">
          <ul className="search-results-list">
            {searchResults.map((searchResult) => {
              return <GameSearchItem key={searchResult.id} game={searchResult} />;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default withRouter(GameSearch);
