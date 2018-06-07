import React from 'react';
import NavBarContainer from '../nav/nav_bar_container';

class GameShow extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    debugger
    this.props.fetchGame(this.props.gameId);
  }

  render(){
    const { game } = this.props;

    if (!game) {
      return 'loading';
    } else {
    return (
      <div className="game-show-page">
        <NavBarContainer />
        <div className="game-show-content">
          <div className="game-show-container">
            {game.title}
            <img className="game-show-image" src={`${game.image_url}`}/>
            {game.description}
          </div>
        </div>
      </div>
    );}
  }
}

export default GameShow;
