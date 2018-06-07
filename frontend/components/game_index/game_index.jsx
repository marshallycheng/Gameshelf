import React from 'react';
import NavBarContainer from '../nav/nav_bar_container';
import GameIndexItem from './game_index_item';

class GameIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }

  componentWillReceiveProps() {
    this.props.fetchGames();
  }

  render(){
    const allTheGames = this.props.games.map(game => {
      return <GameIndexItem key={game.id} game={game} />;
    });

    return (
      <div>
        <NavBarContainer />
        {allTheGames}
      </div>
    );
  }
}

export default GameIndex;
