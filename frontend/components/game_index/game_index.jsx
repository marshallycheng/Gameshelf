import React from 'react';
import NavBarContainer from '../nav/nav_bar_container';
import GameIndexItem from './game_index_item';

class GameIndex extends React.Component {
  constructor(props){
    super(props);
    this.unfocusSearch = this.unfocusSearch.bind(this);
  }

  componentDidMount() {
    this.props.fetchGames();
  }

  removeSearchBorder() {
    const search = document.getElementById('search-placeholder');
    search.classList.remove('search-focus');
  }

  hideResults() {
    const results = document.getElementById('search-results-container');
    results.classList.add('hide-results');
  }

  lightenScreen() {
    const content = document.getElementsByClassName('games-index-content')[0]
      || document.getElementsByClassName('user-profile-content')[0];
    content.classList.remove('darken');
  }

  unfocusSearch() {
    this.removeSearchBorder();
    this.lightenScreen();
    this.hideResults();
  }

  render(){
    const allTheGames = this.props.games.map(game => {
      return <GameIndexItem key={game.id} game={game} />;
    });
    return (
      <div className="game-discover-page">
        <NavBarContainer />
        <div className="games-index-content" onClick={this.unfocusSearch}>
          <div className="game-list">
            {allTheGames}
          </div>
        </div>
      </div>
    );
  }
}

export default GameIndex;
