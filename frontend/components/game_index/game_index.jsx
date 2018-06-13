import React from 'react';
import NavBarContainer from '../nav/nav_bar_container';
import GameIndexItem from './game_index_item';
import GameSearchContainer from '../game_search/game_search_container';

class GameIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {

    this.props.fetchGames();

  }

  render(){
    const allTheGames = this.props.games.map(game => {
      return <GameIndexItem key={game.id} game={game} />;
    });
    return (
      <div className="game-discover-page">
        <NavBarContainer />
        <div className="games-index-content">
          <div className="game-list">
            {allTheGames}
          </div>
        </div>
      </div>
    );
  }
}

export default GameIndex;
